import React from "react";
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import "./prevNextLinks.css";

export default function PrevNextLinks(props){
	return(
		<nav id="prevNextPostLinks">
			{
				(props.prev || props.next) && (
					<ul>
						{props.prev && (<li className="prevPost"><Link to={props.prev.slug}>{props.prev.title}</Link></li>)}
						{props.next && (<li className="nextPost"><Link to={props.next.slug}>{props.next.title}</Link></li>)}
					</ul>
				)
			}
		</nav>
	)
}

PrevNextLinks.propTypes = {
  prev : PropTypes.shape({
		title: PropTypes.string,
		urlSlug: PropTypes.string
	}),
	next : PropTypes.shape({
		title: PropTypes.string,
		urlSlug: PropTypes.string
	})
};