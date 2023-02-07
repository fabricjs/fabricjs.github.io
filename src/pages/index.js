import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layoutFullWidth';
import FeaturedBanner from '../components/featuredBanner/featuredBanner';
import HorizontalPanList from '../components/horizontalPanList/horizontalPanList';
import ThumbnailCard from '../components/card/thumbnailCard';
import ContributorsList from '../components/contributorsList/contributorsList';

export default function HomePage({ data }) {
  const { demoPages, totalCount } = data.demoPagesMD;
  return (
    <Layout>
      <FeaturedBanner />
      <section>
        <h2>Demos</h2>
        <span>{`${totalCount} demos showcasing varied capabilities of FabricJS`}</span>
        <HorizontalPanList
          customClass="featuredDemosList"
          customLastItem={totalCount > 5 ? () => (<span key="view-all-demos"><Link to="/demos">View all demos</Link></span>) : null}
        >
          {demoPages.map(({ frontmatter, fields }) => ( // map((demoPage)=>(
            <ThumbnailCard
              key={fields.slug}
              title={frontmatter.title}
              description={frontmatter.description}
              linkToUrlSlug={fields.slug}
              buttonText="View demo"
              gatsbyImgFluid={frontmatter.thumbnail ? (
                frontmatter.thumbnail.childImageSharp.fluid
              ) : (
                null
              )}
            />
          ))}
          {/* totalCount > 5 && (
            <span key="view-all-demos"><Link to="/demos">View all demos</Link></span>
          ) */}
        </HorizontalPanList>
      </section>
      <section>
        <h2>Contributors</h2>
        <ContributorsList />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query demosQuery {
    demoPagesMD: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "//demo/[a-zA-Z0-9-]+/index.md$/"}}
      sort: {frontmatter: {date: DESC}}
      limit: 5
    ) {
      totalCount
      demoPages: nodes {
        frontmatter {
          title
          description
          thumbnail {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;

HomePage.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    demoPagesMD: PropTypes.object,
  }).isRequired,
};
