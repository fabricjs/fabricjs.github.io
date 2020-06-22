import React from "react";
import "./sidebarLeft.css";


export default function SidebarLeft(props){
	const [visibility, setVisibility] = React.useState(false);

	return(
		<aside className={visibility ? 'open' : 'closed'} id="sidebarLeft">
			<div onClick={()=>setVisibility(false)} id="sidebarLeftModalBg"></div>
			<button onClick={()=>setVisibility(!visibility)}></button>
			<div id="sideBarLeftContentWrap">{/*props.children*/}{props.children(setVisibility)}</div>{/*https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children*/}
		</aside>
	)
}
