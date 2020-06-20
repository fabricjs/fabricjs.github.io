import React from "react";
import Script from "react-load-script";
import Header from "./header/header";
import Footer from "./footer/footer";
//import Seo from "./seo";
import PropTypes from "prop-types";

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

function codepenLoaded() {
	var preEl = document.querySelectorAll('[data-lang="html"]');
	[].forEach.call(preEl, function(el) {
		el.innerHTML = escapeHtml(el.innerHTML);
	});
	window.__CPEmbed(".codepen-later");
}

export default function Layout(props){
	return(
		<>
		<Script onLoad={codepenLoaded} url="https://static.codepen.io/assets/embed/ei.js" />
		{/* <Seo></Seo> */}
		<Header>
		</Header>
		<main className={props.darkBg && "darkBg"}>
			{props.children}
		</main>
		<Footer/>
		</>
	)
}

Layout.propTypes = {
	darkBg : PropTypes.bool
};
