import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { CodeEditor } from '../components/CodeEditor';
import GithubEditLink from '../components/githubEditLink/githubEditLink';
import LayoutFullWidth from '../components/layoutFullWidth';
import PrevNextLinks from '../components/prevNextPostLinks/prevNextLinks';
import Seo from '../components/seo';

export default function Demo({ pageContext, children }) {
  console.log(pageContext);
  const { title } = pageContext.frontmatter;
  return (
    <LayoutFullWidth>
      <Seo title={title} />
      <nav id="breadcrumb-nav" aria-label="breadcrumb">
        <Link to="/demos">Demos</Link> &gt; <span>{title}</span>
      </nav>
      <h1>{title}</h1>
      <article>
        {children}
        {pageContext.code && <CodeEditor code={pageContext.code} />}
      </article>
      <GithubEditLink relativePath={pageContext.relativePath} />
      <PrevNextLinks
        prev={
          pageContext.prev || { title: 'All FabricJS demos', slug: '/demos' }
        }
        next={pageContext.next}
      />
    </LayoutFullWidth>
  );
}

Demo.propTypes = {
  children: PropTypes.any,
  pageContext: PropTypes.shape({
    frontmatter: {
      title: PropTypes.string,
    },
    code: PropTypes.string,
    relativePath: PropTypes.string,
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
