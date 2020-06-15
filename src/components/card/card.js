import React from "react";
//import PropTypes from 'prop-types';
import "./card.css";

export default function Card(props){
	return(
		<div className="card">
			{/*props.title && (<h4>{props.title}</h4>)*/}
			{props.children}
		</div>
	)
}

//Card.propTypes = {
//	title: PropTypes.string,
//}