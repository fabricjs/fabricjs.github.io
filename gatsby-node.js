/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */

// +------------------------------------------------------------------+
// | Fetch remote data (contributors) at build-time                   |
// | Later, maybe use the Github GraphQl API to source data in one go |
// +------------------------------------------------------------------+
const fetch = require('node-fetch');

// https://www.gatsbyjs.org/docs/creating-a-source-plugin/#sourcing-data-and-creating-nodes
// https://www.gatsbyjs.org/docs/data-fetching/
exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(
    'https://api.github.com/repos/fabricjs/fabric.js/contributors?per_page=10'
  );
  const jsonData = await result.json();
  // Commented out, since we also require the 'name' which is not available until we query user-details of each contributor
  /* jsonData.forEach((datum) => {
    createNode({
      // arbitrary fields from the data
      name: datum.login,
      picUrl: datum.avatar_url, // maybe later create remote file-nodes from this so as for Sharp to optimize the img delivery
      url: datum.html_url,
      // required fields
      id: createNodeId(`fabricjs-contributor-${datum.login}`),
      parent: null,
      children: [],
      internal: {
        type: 'Contributor',
        contentDigest: createContentDigest(datum),
      },
    });
  });// */

  const numUsers = jsonData.length;

  // https://zellwk.com/blog/async-await-in-loops/

  for (let userIndex = 0; userIndex < numUsers; userIndex++) {
    /* eslint-disable-line no-plusplus */
    // console.log(`Creating node for ${jsonData[userIndex].login}`);
    const userData = await fetch(
      `https://api.github.com/users/${jsonData[userIndex].login}`
    ); /* eslint-disable-line no-await-in-loop */
    const user =
      await userData.json(); /* eslint-disable-line no-await-in-loop */
    createNode({
      // arbitrary fields from the data
      name: user.name || user.login,
      picUrl: user.avatar_url, // maybe later create remote file-nodes from this so as for Sharp to optimize the img delivery
      url: user.html_url, // url: user.blog === '' ? user.html_url : user.blog,
      // required fields
      id: createNodeId(`fabricjs-contributor-${user.login}`),
      parent: null,
      children: [],
      internal: {
        type: 'Contributor',
        contentDigest: createContentDigest(user),
      },
    });
  }
};

// +------------------------------------------------------------------+
// | Create slug from file-path and append it to the 'fields' section |
// | under GraphQl so that we can reference it inside pages           |
// +------------------------------------------------------------------+

const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'mdx') {
    const { createNodeField } = actions;
    const slug = createFilePath({
      node,
      getNode,
      basePath: 'content',
      trailingSlash: false,
    }); /* basePath -- path inside src folder to act as base path */

    createNodeField({
      node,
      name: 'slug',
      value: slug.replace(/ +/g, '-').replace(/-+/g, '-'), // slug.replace(/\/$/,"")    //also remove trailing slash if any (this is not req coz while creating the slug using createFilePath(), we have already set 'trailingSlash' as false)
    });
  }
};

const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // +------------------------------------------------------------------+
  // | Create pages for listing 'demos' & each 'demo'                   |
  // +------------------------------------------------------------------+

  /// /fetch the 'demo' md files and create pages for them
  const demoPagesQueryResult = await graphql(`
    query demoPagesQueryResult {
      allMdx(
        filter: { frontmatter: { title: { regex: "/[a-zA-Z0-9]+$/" } } }
        sort: { frontmatter: { title: ASC } }
      ) {
        edges {
          previous {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
          next {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  // create each 'demo' page
  demoPagesQueryResult.data.allMdx &&
    demoPagesQueryResult.data.allMdx.edges.forEach(
      ({ node, previous, next }) => {
        node.fields.slug !== null &&
          node.fields.slug.trim() !== '' &&
          createPage({
            path: node.fields.slug,
            component: path.resolve('./src/templates/demo.jsx'),
            context: {
              // Data passed to context is available
              // in page queries as GraphQL variables.
              title: node.frontmatter.title,
              slug: node.fields.slug,
              prev: previous
                ? {
                    title: previous.frontmatter.title,
                    slug: previous.fields.slug,
                  }
                : null,
              next: next
                ? { title: next.frontmatter.title, slug: next.fields.slug }
                : null,
            },
          });
      }
    );

  // create 'demos' page
  createPage({
    path: '/demos',
    component: path.resolve('./src/templates/demos.jsx'),
  });

  // +------------------------------------------------------------------+
  // | Create pages for 'docs' intro-page & each 'doc' page             |
  // +------------------------------------------------------------------+

  /// /fetch the 'doc' md files and create pages for them
  const docPagesQueryResult = await graphql(`
    query docPagesQueryResult {
      allDocPagesMD: allMdx(
        filter: { frontmatter: { title: { regex: "/[a-zA-Z0-9]+$/" } } }
        sort: { frontmatter: { date: ASC } }
      ) {
        docPages: nodes {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  `);
  const { docPages } = docPagesQueryResult.data.allDocPagesMD;

  // collect all doc titles and links in a array which we'll pass as context when creating each doc page
  /* let docList = [];
  docPages.forEach(({frontmatter,fields})=>{
    fields.slug!==null && fields.slug.trim()!=='' && docList.push({'title':frontmatter.title,'slug':fields.slug})
  }) */
  const docList = docPages.map(({ frontmatter, fields }) => ({
    title: frontmatter.title,
    slug: fields.slug,
  }));

  // create each 'doc' page
  docPages.forEach(({ fields }, di) => {
    fields.slug !== null &&
      fields.slug.trim() !== '' &&
      createPage({
        path: fields.slug,
        component: path.resolve('./src/templates/doc.jsx'),
        context: {
          slug: fields.slug,
          prev:
            di === 0
              ? null
              : {
                  title: docPages[di - 1].frontmatter.title,
                  slug: docPages[di - 1].fields.slug,
                },
          next:
            di === docPages.length - 1
              ? null
              : {
                  title: docPages[di + 1].frontmatter.title,
                  slug: docPages[di + 1].fields.slug,
                },
          docList,
        },
      });
  });

  // create 'docs' page
  createPage({
    path: '/docs',
    component: path.resolve('./src/templates/docs.jsx'),
    context: { docList },
  });
};
