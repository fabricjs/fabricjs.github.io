import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TableOfContents from '../components/tableOfContents/tableOfContents';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Doc({ pageContext, data, children }) {
  const { frontmatter, toc, mdFile } = data.docPage;
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
              {pageContext.docList.map(({ title, slug }) => (
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
                      tableOfContentsHtml={toc}
                    />
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </>
      )}
    >
      <Seo title={frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/docs">Guide docs</Link> &gt; <span>{frontmatter.title}</span>
      </nav>
      <h1>{frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article>{children}</article>
      <GithubEditLink relativePath={mdFile.relativePath} />
      <PrevNextLinks
        prev={pageContext.prev || { title: 'Introduction', slug: '/docs' }}
        next={pageContext.next}
      />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    docPage: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      toc: tableOfContents(maxDepth: 2)
      mdFile: parent {
        ... on File {
          relativePath
        }
      }
    }
  }
`;

Doc.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    docPage: PropTypes.object,
  }).isRequired,
  children: PropTypes.any,
  pageContext: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    docList: PropTypes.array,
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
