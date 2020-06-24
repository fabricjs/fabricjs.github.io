import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
//import Seo from "./seo";
import PropTypes from "prop-types";

export default function Layout(props){
	return(
		<>
		{/* <Seo></Seo> */}
		<Header></Header>
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
