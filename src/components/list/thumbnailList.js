import React from "react";
//import PropTypes from "prop-types";
import "./thumbnailList.css";

export default function ThumbnailList(props){
	return(
		<ul className="thumbList">
			{props.children}
		</ul>
	)
}