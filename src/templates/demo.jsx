import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import LayoutFullWidth from '../components/layoutFullWidth';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Demo({ data, pageContext, children }) {
  const { frontmatter, mdFile } = data.demoPage;
  return (
    <LayoutFullWidth>
      <Seo title={frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/demos">Demos</Link> &gt; <span>{frontmatter.title}</span>
      </nav>
      <h1>{frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article>{children}</article>
      <GithubEditLink relativePath={mdFile.relativePath} />
      <PrevNextLinks
        prev={
          pageContext.prev || { title: 'All FabricJS demos', slug: '/demos' }
        }
        next={pageContext.next}
      />
    </LayoutFullWidth>
  );
}

export const query = graphql`
  query ($slug: String!) {
    demoPage: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      mdFile: parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;

Demo.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    demoPage: PropTypes.object,
  }).isRequired,
  children: PropTypes.any,
  pageContext: PropTypes.shape({
    prev: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
    next: PropTypes.shape({
      title: PropTypes.string,
      slug: PropTypes.string,
    }),
  }).isRequired,
};
