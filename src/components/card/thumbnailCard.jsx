import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Card from './card';
import './thumbnailCard.css';

export default function ThumbnailCard({
  title, description, linkToUrlSlug, gatsbyImgFluid,
}) {
  return (
    <Card>
      <Link
        title={title}
        to={linkToUrlSlug}
        draggable="false"
        onDragStart={(e) => { e.preventDefault(); return false; }}
      >
        <span className="thumbCntnr">
          {gatsbyImgFluid ? (
            <GatsbyImage title={title} alt={title} fluid={gatsbyImgFluid} />
          ) : (
          // if featured image exists, generate a thumbnail from it
            <img alt="For dummy purpose only" src="https://source.unsplash.com/random/200x200" />
          )}
        </span>
        {/* <span className="thumbCntnr"><img alt="For dummy purpose only" src="https://source.unsplash.com/random/200x200"/></span> */}
        {/* <h4>{props.title}</h4> */}
        <h4>{title}</h4>
        {description && (<span className="desc">{description}</span>)}
      </Link>
    </Card>
  );
}

ThumbnailCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  gatsbyImgFluid: PropTypes.object, /* eslint-disable-line react/forbid-prop-types */
  linkToUrlSlug: PropTypes.string,
};

ThumbnailCard.defaultProps = {
  title: null,
  description: null,
  gatsbyImgFluid: null,
  linkToUrlSlug: null,
};
