/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'FabricJS',
    description:
      'FabricJS is a HTML5 canvas library offering an interactive object model for drawing graphics while also being able to parse SVG',
    url: 'https://fabricjs.com' /* No trailing slash allowed! */,
    baseUrl: '',
    author: 'Nimish Rajwade, Andrea Bogazzi',
    /* image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder */
    twitterUsername: '@fabricjs',
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx-content',
        path: `${__dirname}/src/content`,
      },
      __key: 'content',
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.md`, `.mdx`],
        gatsbyRemarkPlugins: [
          /* `gatsby-remark-copy-linked-files`, */ /* for copying files linked inside md to the distribution folder, for eg pdf files or any such attachments */
          {
            resolve:
              'gatsby-remark-images' /* for processing the images mentioned in md files using md syntax */,
            options: {
              maxWidth: 800,
              backgroundColor: 'none',
            },
          },
          {
            resolve:
              'gatsby-remark-autolink-headers' /* would create anchor tags for the headers H2, H3 etc within the md file */,
            options: {
              /* offsetY: `170`, */
              // icon: '',
              /* className: `subTopicHeader`, */
              removeAccents: true,
              maintainCase: false,
              isIconAfterHeader: true,
            },
          },
          /* we could dump this in favor of a react render maybe as suggested by docs */
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              inlineCodeMarker: '>',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tsdocs`,
        path: `${__dirname}/src/tsdocs`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
