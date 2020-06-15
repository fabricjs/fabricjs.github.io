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

	//create pages for each of the 'demo' pages
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

}