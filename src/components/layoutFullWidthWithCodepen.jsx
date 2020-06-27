import React from 'react';
import Script from 'react-load-script';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
// import Seo from "./seo";

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function codepenLoaded() {
  /* eslint-disable no-undef */
  /* eslint-disable no-underscore-dangle */
  const preEl = document.querySelectorAll('[data-lang="html"]');
  [].forEach.call(preEl, (el) => {
    el.innerHTML = escapeHtml(el.innerHTML); // eslint-disable-line no-param-reassign
  });
  window.__CPEmbed('.codepen-later');
}

export default function Layout({ children, darkBg }) {
  return (
    <>
      <Script onLoad={codepenLoaded} url="https://static.codepen.io/assets/embed/ei.js" />
      {/* <Seo></Seo> */}
      <Header />
      <main className={darkBg && 'darkBg'}>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  darkBg: PropTypes.bool,
};

Layout.defaultProps = {
  darkBg: false,
};
