import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TableOfContents from '../components/tableOfContents/tableOfContents';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';

export default function Apidoc({ pageContext, data }) {
  const { toc, mdFile, html } = data.apidocPage;

  return (
    <Layout
      leftSidebar={(setVisibility) => (
        <>
          <header>Guides</header>
          <nav id="topics" aria-label="Contents">
            <ol>
              <li>
                <Link
                  onClick={() => {
                    setVisibility(false);
                  }}
                  title="Introduction"
                  to="/docs"
                >
                  Introduction
                </Link>
              </li>
              {pageContext.apidocList.map(({ title, slug }) => (
                <li key={slug}>
                  <Link
                    onClick={() => {
                      setVisibility(false);
                    }}
                    activeClassName="active"
                    title={title}
                    to={slug}
                  >
                    {title}
                  </Link>
                  {pageContext.slug === slug && (
                    <TableOfContents
                      hideSidebar={() => {
                        setVisibility(false);
                      }}
                      toc={toc.items}
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </>
      )}
    >
      {/* <Seo title={frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/docs">Api docs</Link> &gt; <span>{frontmatter.title}</span>
      </nav>
      <h1>{frontmatter.title}</h1> */}
      {/* eslint-disable-next-line react/no-danger */}
      <article dangerouslySetInnerHTML={{ __html: html }} />
      <GithubEditLink relativePath={mdFile.relativePath} />
      <PrevNextLinks prev={pageContext.prev} next={pageContext.next} />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    apidocPage: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      toc: tableOfContents(maxDepth: 3)
      mdFile: parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;

Apidoc.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    apidocPage: PropTypes.object,
  }).isRequired,
  pageContext: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    apidocList: PropTypes.array,
    slug: PropTypes.string,
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
