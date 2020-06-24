//sidebar left is used in layout.js
import React from "react";
import "./tableOfContents.css";

/*export default function TableOfContents(props){
	return(
		<nav id="table-of-contents" dangerouslySetInnerHTML={{ __html: props.tableOfContentsHtml }}/>
	)
}//*/

//https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll

export default class TableOfContents extends React.Component{
	//constructor(props){
		//super(props)
		//this.state = {someVar : someVal	}
	//}

	//derived from -- https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
	_doScrolling = (scrolToElm,duration)=>{
		//if(typeof window === 'undefined')return;
		if(!scrolToElm)return;
		duration=duration||500;	//default to 0.5 sec
		var startPos = window.pageYOffset || 0,		//relative to entire document (pixels of document hidden above the top-screen-line)
			distanceToElmTop = scrolToElm.getBoundingClientRect().top;	//relative to screen (distance to top of element to be scrolled to)
			distanceToElmTop -= 60;	//offset from top to accomodate header
		//in order to scrollTo that elm, we add startPos and distanceToElmTop
		var start;

		//* Bootstrap our animation - it will get called right before next frame shall be rendered.
		window.requestAnimationFrame(function step(timestamp){
			start = start||timestamp;	//if(!start) start = timestamp;
			var time = timestamp - start,	// Elapsed milliseconds since start of scrolling.
				percent = Math.min(time / duration, 1);	// Get percent of completion in range [0, 1].

			window.scrollTo(0, startPos+(distanceToElmTop*percent) );

			// Proceed with animation as long as we wanted it to.
			if(time < duration){
			  window.requestAnimationFrame(step);
			}
		})//*/
	}
	handleClick = (e)=>{
		if(typeof window === 'undefined')return;
		e.preventDefault();
		//console.log(e.target.tagName);
		if(e.target.tagName==='A'){
			//console.log('go to elm with id -- '+e.target.href.substring(e.target.href.indexOf("#") + 1))
			var scrolToEl = document.getElementById(e.target.href.split("#")[1]);
			scrolToEl && this._doScrolling(scrolToEl,500);	
			this.props.hideSidebar && typeof(this.props.hideSidebar)==='function' && this.props.hideSidebar();
			//this.props.hideSidebar();
			//console.log(this.props);
		}
	}
	render(){
		return(
			<nav onClick={this.handleClick} id="table-of-contents" dangerouslySetInnerHTML={{ __html: this.props.tableOfContentsHtml }}/>
		)
	}
}
