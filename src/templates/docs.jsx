import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TableOfContents from '../components/tableOfContents/tableOfContents';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Docs({ pageContext, data }) {
  return (
    <Layout leftSidebar={(setVisibility) => (
      <>
        <header>Guides</header>
        <nav id="topics" aria-label="Contents">
          <ol>
            <li>
              <Link onClick={() => { setVisibility(false); }} activeClassName="active" title="Introduction" to="/docs">Introduction</Link>
              <TableOfContents
                hideSidebar={() => { setVisibility(false); }}
                tableOfContentsHtml={data.introPage.toc}
              />
            </li>
            {
            pageContext.docList.map(({ title, slug }) => (
              <li key={slug}>
                <Link
                  onClick={() => { setVisibility(false); }}
                  title={title}
                  to={slug}
                >
                  {title}
                </Link>
              </li>
            ))
          }
          </ol>
        </nav>
      </>
    )}
    >
      <Seo title={data.introPage.frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/">FabricJS</Link>
        {' '}
        &gt;
        {' '}
        <span>Docs</span>
      </nav>
      <h1>{data.introPage.frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: data.introPage.html }} />
      <PrevNextLinks
        next={{
          title: pageContext.docList[0].title,
          slug: pageContext.docList[0].slug,
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query {
    introPage : markdownRemark(fileAbsolutePath: {regex: "//docs/introduction.md$/"}) {
      html
      frontmatter {
        title
      }
      toc: tableOfContents(absolute: false,maxDepth: 2)
    }
  }
`;

Docs.propTypes = {
  data: PropTypes.shape({
    introPage: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    docList: PropTypes.array,
  }).isRequired,
};
