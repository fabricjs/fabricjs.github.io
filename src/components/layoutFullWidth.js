import React from "react";
import Header from "./header";
import Footer from "./footer";
//import Seo from "./seo";

export default function Layout(props){
	return(
		<>
		{/* <Seo></Seo> */}
		<Header></Header>
		<main>
			{props.children}
		</main>
		<Footer/>
		</>
	)
}