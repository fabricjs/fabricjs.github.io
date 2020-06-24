/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
	siteMetadata: {		/*https://www.gatsbyjs.org/docs/add-seo-component/		https://www.gatsbyjs.org/docs/add-page-metadata/	*/
		title: `FabricJS`,
		description: 'FabricJS is a HTML5 canvas library offering an interactive object model for drawing graphics while also being able to parse SVG',
		url: 'https://fabricjs.com',/* No trailing slash allowed!*/
		baseUrl: '',
		author: 'Nimish Rajwade',
		/*image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder*/
		twitterUsername: "@fabricjs"
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
  			options: {
				name: `pages`,
				path: `${__dirname}/src/pages`,
			}
		},
		`gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					/*`gatsby-remark-copy-linked-files`,*/	/*for copying files linked inside md to the distribution folder, for eg pdf files or any such attachments*/
					{
						resolve: `gatsby-remark-images`,	/*for processing the images mentioned in md files using md syntax*/
						options: {
							maxWidth: 800,
							backgroundColor: 'none'
						}
					},
					{
						resolve: `gatsby-remark-autolink-headers`,	/*would create anchor tags for the headers H2, H3 etc within the md file*/
						options: {
							/*offsetY: `170`,*/
							icon: '',
							/*className: `subTopicHeader`,*/
							removeAccents: true,
							maintainCase: false,
							isIconAfterHeader: true
						},
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							inlineCodeMarker: '>'
						}
					}
				]
			}
		},
		`gatsby-plugin-react-helmet`,
		'gatsby-plugin-eslint',
	]
}

/*Autolinking relative links within markdown -- https://www.gatsbyjs.org/packages/gatsby-remark-autolink-headers/*/
