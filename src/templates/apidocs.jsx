import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import TableOfContents from '../components/tableOfContents/tableOfContents';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function ApiDocs({ pageContext, data, children }) {
  const { frontmatter, toc, mdFile } = data.introPage;

  return (
    <Layout
      leftSidebar={(setVisibility) => (
        <>
          <nav id="topics" aria-label="Contents">
            <ol>
              <li>
                <Link
                  onClick={() => {
                    setVisibility(false);
                  }}
                  activeClassName="active"
                  title="Modules"
                  to="/api-docs"
                >
                  Modules
                </Link>
                <TableOfContents
                  hideSidebar={() => {
                    setVisibility(false);
                  }}
                  toc={toc.items}
                />
              </li>
              {pageContext.apiDocList.map(({ title, slug }) => (
                <li key={slug}>
                  <Link
                    onClick={() => {
                      setVisibility(false);
                    }}
                    title={title}
                    to={slug}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </>
      )}
    >
      <Seo title={frontmatter.title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/">FabricJS</Link> &gt; <span>Api Docs</span>
      </nav>
      <h1>{frontmatter.title}</h1>
      {/* eslint-disable-next-line react/no-danger */}
      <article>{children}</article>
      <GithubEditLink relativePath={mdFile.relativePath} />
      <PrevNextLinks
        next={{
          title: pageContext.apiDocList[0].title,
          slug: pageContext.apiDocList[0].slug,
        }}
      />
    </Layout>
  );
}

export const query = graphql`
  query docsQuery {
    introPage: mdx(
      internal: { contentFilePath: { regex: "//apidocs/modules.md$/" } }
    ) {
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

ApiDocs.propTypes = {
  data: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    introPage: PropTypes.object,
  }).isRequired,
  children: PropTypes.any,
  pageContext: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    apiDocList: PropTypes.array,
  }).isRequired,
};
