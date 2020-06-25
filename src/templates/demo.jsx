import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import LayoutCodepen from '../components/layoutFullWidthWithCodepen';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Demo({ data, pageContext }) {
  return (
    <LayoutCodepen>
      <Seo title={data.demoPage.frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/demos">Demos</Link>
        {' '}
        &gt;
        {' '}
        <span>{data.demoPage.frontmatter.title}</span>
      </nav>
      <h1>{data.demoPage.frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: data.demoPage.html }} />
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
