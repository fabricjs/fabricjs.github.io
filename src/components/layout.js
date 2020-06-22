import React from "react";
import Header from "./header/header";
import Footer from "./footer/footer";
import SidebarLeft from "./sidebarLeft/sidebarLeft";
//import Seo from "./seo";

export default function Layout(props){
	return(
		<>
		{/* <Seo></Seo> */}
		<Header></Header>
		{props.leftSidebar && typeof(props.leftSidebar)==='function' && (
			<SidebarLeft>{/*props.leftSidebar()*/
				//SidebarLeft makes available 'setVisibility' fn as a param to children
				//also, we use render prop to render elements inside sideBar instead of some non-dynamic/fixed content. So we forward the 'setVisibility' fn as a param to the render prop as well
				setVisibility => (props.leftSidebar(setVisibility))
			}</SidebarLeft>
		)}
		<main>
			{props.children}
		</main>
		<Footer/>
		</>
	)
}