import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/layoutFullWidth'
import ThumbnailList from '../components/list/thumbnailList'
import ThumbnailCard from '../components/card/thumbnailCard'
import Seo from '../components/seo'

export default function Demos({ data }) {
  const pageDesc =
    'Awesome demos portraying various interactive aspects and capabilities of FabricJS'
  return (
    <Layout darkBg>
      <Seo title="FabricJS demos" />
      <h1>FabricJS Demos</h1>
      <p
        style={{ 'text-align': 'center' }}
      >{`${data.allDemoPagesMD.totalCount} ${pageDesc}`}</p>
      <ThumbnailList>
        {data.allDemoPagesMD.demoPages.map(
          (
            { frontmatter, fields } // map((demoPage)=>(
          ) => (
            <li key={fields.slug}>
              <ThumbnailCard
                title={frontmatter.title}
                description={frontmatter.description}
                linkToUrlSlug={fields.slug}
                buttonText="View demo"
                gatsbyImgFluid={
                  frontmatter.thumbnail
                    ? frontmatter.thumbnail.childImageSharp.gatsbyImageData
                    : null
                }
              />
            </li>
          )
        )}
      </ThumbnailList>
    </Layout>
  )
}

// Programmatically create pages from data -- https://www.gatsbyjs.org/tutorial/part-seven/
// Adding markdown pages -- https://www.gatsbyjs.org/docs/adding-markdown-pages/
// Working with Images in Markdown Posts and Pages -- https://www.gatsbyjs.org/docs/working-with-images-in-markdown/

// eslint-disable-next-line max-len
// note that we ignore fetching sub-posts in this query coz we do not want to list sub-posts when listing projects
// Sub-posts will b accessible from the page of the relevant post they belong to
export const query = graphql`
  query allDemoPagesMD {
    allDemoPagesMD: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "//demo/[a-zA-Z0-9-]+/index.md$/" } }
      sort: { frontmatter: { title: ASC } }
    ) {
      totalCount
      demoPages: nodes {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`

Demos.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    allDemoPagesMD: PropTypes.object,
  }).isRequired,
}
