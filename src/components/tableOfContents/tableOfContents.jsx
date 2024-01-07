// sidebar left is used in layout.js
import React from 'react';
import PropTypes from 'prop-types';
import './tableOfContents.css';

// https://stackoverflow.com/questions/9979827/change-active-menu-item-on-page-scroll

export default class TableOfContents extends React.Component {
  // constructor(props){
  // super(props)
  // this.state = {someVar : someVal}
  // }

  // derived from -- https://stackoverflow.com/questions/17722497/scroll-smoothly-to-specific-element-on-page
  doScrolling = (scrolToElm, duration) => {
    // if(typeof window === 'undefined')return;
    if (!scrolToElm) return;
    const durationInSec = duration || 500; // default to 0.5 sec
    const startPos = window.pageYOffset || 0; // eslint-disable-line no-undef
    // startPos -- relative to entire document (pixels of document hidden above the top-screen-line)
    let distanceToElmTop = scrolToElm.getBoundingClientRect().top;
    // distanceToElmTop -- relative to screen (distance to top of element to be scrolled to)
    distanceToElmTop -= 60; // offset from top to accomodate header
    // in order to scrollTo that elm, we add startPos and distanceToElmTop
    let start;

    //* Bootstrap our animation - it will get called right before next frame shall be rendered.
    window.requestAnimationFrame(function step(timestamp) {
      // eslint-disable-line no-undef
      start = start || timestamp; // if(!start) start = timestamp;
      const time = timestamp - start; // Elapsed milliseconds since start of scrolling.
      const percent = Math.min(time / durationInSec, 1); // Get % of completion in range [0, 1].

      window.scrollTo(0, startPos + distanceToElmTop * percent); // eslint-disable-line no-undef

      // Proceed with animation as long as we wanted it to.
      if (time < durationInSec) {
        window.requestAnimationFrame(step); // eslint-disable-line no-undef
      }
    }); //* /
  };

  handleClick = (e) => {
    if (typeof window === 'undefined') return;
    // console.log(e.target.tagName);
    if (e.target.tagName === 'A') {
      const isInDocLink = e.target.href.startsWith('#');
      if (isInDocLink) {
        e.preventDefault();
        const { hideSidebar } = this.props;
        const scrolToEl = document.getElementById(e.target.href.split('#')[1]); // eslint-disable-line no-undef
        scrolToEl && this.doScrolling(scrolToEl, 500); // eslint-disable-line no-unused-expressions
        hideSidebar && typeof hideSidebar === 'function' && hideSidebar(); // eslint-disable-line no-unused-expressions
        // this.props.hideSidebar();
        // console.log(this.props);
      }
    }
  };

  render() {
    const { toc } = this.props;
    return (
      <nav onClick={this.handleClick} role="button" id="table-of-contents">
        <ul>
          {toc.map(({ title, url }) => (
            <li key={url}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

TableOfContents.propTypes = {
  hideSidebar: PropTypes.func,
  toc: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
};

TableOfContents.defaultProps = {
  hideSidebar: null,
  toc: [],
};
