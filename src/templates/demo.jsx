import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import LayoutCodepen from '../components/layoutFullWidthWithCodepen';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Demo({ data, pageContext }) {
  const { frontmatter, html, mdFile } = data.demoPage;
  return (
    <LayoutCodepen>
      <Seo title={frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/demos">Demos</Link>
        {' '}
        &gt;
        {' '}
        <span>{frontmatter.title}</span>
      </nav>
      <h1>{frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <GithubEditLink relativePath={mdFile.relativePath} />
      <PrevNextLinks prev={pageContext.prev || { title: 'All FabricJS demos', slug: '/demos' }} next={pageContext.next} />
    </LayoutCodepen>
  );
}

export const query = graphql`
  query($slug: String!){
    demoPage: markdownRemark(fields: {slug: {eq: $slug}}) {
      html
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
    demoPage: PropTypes.object,
  }).isRequired,
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
