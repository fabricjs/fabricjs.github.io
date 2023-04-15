import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

export function Head({
  pageContext,
  title: propTitle, description: propDescription, path, image: propImg,
}) {

  console.log({ pageContext })

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;

  if (defaults.baseUrl === '' && typeof window !== 'undefined') {
    defaults.baseUrl = window.location.origin; // eslint-disable-line no-undef
  }

  if (defaults.baseUrl === '') {
    console.error('Please set a baseUrl in your site metadata!'); // eslint-disable-line no-console
    return null;
  }

  const title = propTitle || defaults.title;
  const description = propDescription || defaults.description;
  const url = new URL(path || '', defaults.baseUrl);
  const image = propImg ? new URL(propImg, defaults.baseUrl) : false;

  return (
    <>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}

      {
      /* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={props.author.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}
      */
      }
    </>
  );
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  path: PropTypes.string,
  image: PropTypes.string,
};

Seo.defaultProps = {
  title: 'FabricJS',
  description: 'FabricJS is a HTML5 canvas library offering an interactive object model for drawing graphics while also being able to parse SVG',
  path: null,
  image: null,
};
