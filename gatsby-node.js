/* Create slug from file-path and append that slug to the 'fields' section under GraphQl so that we can reference it inside pages */
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
	if (node.internal.type === `MarkdownRemark`) {
		const { createNodeField } = actions;
		let slug = createFilePath({ node, getNode, basePath: `pages`, trailingSlash:false });	/* basePath -- path inside src folder to act as base path */

		createNodeField({
			node,
			name: `slug`,
			value: slug.replace(/ +/g,"-").replace(/-+/g,"-")		//slug.replace(/\/$/,"")		//also remove trailing slash if any (this is not req coz while creating the slug using createFilePath(), we have already set 'trailingSlash' as false)
		})
	}
}


const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;


/* ----------------------------------------------------
###   Create pages for listing 'demos' & each 'demo'  |
-----------------------------------------------------*/

	////fetch the 'demo' md files and create pages for them
	const demoPagesQueryResult = await graphql(`
	query {
		allMarkdownRemark(
			filter: {
				fileAbsolutePath: {regex: "//demo/[a-zA-Z0-9-]+/index.md$/"},
				frontmatter: {title: {regex: "/[a-zA-Z0-9]+$/"}}
			},
			sort: {order: ASC, fields: frontmatter___title}
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

	//create each 'demo' page
	demoPagesQueryResult.data.allMarkdownRemark && demoPagesQueryResult.data.allMarkdownRemark.edges.forEach(({ node,previous,next }) => {
		node.fields.slug!==null && node.fields.slug.trim()!=='' && createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/demo.js`),
			context: {
				// Data passed to context is available
				// in page queries as GraphQL variables.
				slug: node.fields.slug,
				prev: previous ? {'title':previous.frontmatter.title,'slug':previous.fields.slug} : null,
				next: next ? {'title':next.frontmatter.title,'slug':next.fields.slug} : null,
			},
		})
	})

	//create 'demos' page
	createPage({
		path: `/demos`,
		component: path.resolve(`./src/templates/demos.js`),
	})



/* ----------------------------------------------------------
###   Create pages for 'docs' intro-page & each 'doc' page  |
-----------------------------------------------------------*/

	////fetch the 'doc' md files and create pages for them
	const docPagesQueryResult = await graphql(`
	query {
		allDocPagesMD: allMarkdownRemark(
			filter: {
				fileAbsolutePath: {regex: "//docs/[a-zA-Z0-9-]+/index.md$/"},
				frontmatter: {title: {regex: "/[a-zA-Z0-9]+$/"}}
			},
			sort: {order: ASC, fields: frontmatter___date}
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
	const docPages = docPagesQueryResult.data.allDocPagesMD.docPages;

	//collect all doc titles and links in a array which we'll pass as context when creating each doc page
	/*let docList = [];
	docPages.forEach(({frontmatter,fields})=>{
		fields.slug!==null && fields.slug.trim()!=='' && docList.push({'title':frontmatter.title,'slug':fields.slug})
	})*/
	const docList = docPages.map( ({frontmatter,fields}) => ({'title':frontmatter.title,'slug':fields.slug}) );

	//create each 'doc' page
	docPages.forEach(({fields},di) => {
		fields.slug!==null && fields.slug.trim()!=='' && createPage({
			path: fields.slug,
			component: path.resolve(`./src/templates/doc.js`),
			context: {
				slug: fields.slug,
				prev : di===0 ? null : {'title':docPages[di-1].frontmatter.title,'slug':docPages[di-1].fields.slug},
				next : di===docPages.length-1 ? null : {'title':docPages[di+1].frontmatter.title,'slug':docPages[di+1].fields.slug},
				docList,
			},
		})
	})

	//create 'docs' page
	createPage({
		path: `/docs`,
		component: path.resolve(`./src/templates/docs.js`),
		context: {docList}
	})
}
