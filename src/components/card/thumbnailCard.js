import React from "react";
import Card from "./card";
import { Link } from "gatsby";
import GatsbyImage from "gatsby-image";
import PropTypes from 'prop-types';

import "./thumbnailCard.css";

export default function ThumbnailCard(props){
	return(
		<Card>
			<Link title={props.title} to={props.linkToUrlSlug}>
			<span className="thumbCntnr">
				{props.gatsbyImgFluid?(
					<GatsbyImage title={props.title} alt={props.title} fluid={props.gatsbyImgFluid}></GatsbyImage>
				):(
					//if featured image exists, generate a thumbnail from it
					<img alt="For dummy purpose only" src="https://source.unsplash.com/random/200x200"/>
				)}
			</span>
			{/*<span className="thumbCntnr"><img alt="For dummy purpose only" src="https://source.unsplash.com/random/200x200"/></span>*/}
			{/*<h4>{props.title}</h4>*/}
			<h4>{props.title}</h4>
			{props.description && (<span className="desc">{props.description}</span>)}
			{/*<span className="thumbnailCardFooter">
				<Link title={props.title} to={props.linkToUrlSlug}>{props.buttonText || "View"}</Link>
			</span>*/}
			</Link>
		</Card>
	)
}

ThumbnailCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	gatsbyImgFluid: PropTypes.string,
	linkToUrlSlug: PropTypes.string,
	buttonText: PropTypes.string
}

ThumbnailCard.defaultProps = {
	title: null,
	description: null,
	gatsbyImgFluid: null,
	linkToUrlSlug: null,
	buttonText: "Read more",
}
