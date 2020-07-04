import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
// import Seo from "./seo";

export default function Layout({ children, darkBg }) {
  return (
    <>
      {/* <Seo></Seo> */}
      <Header />
      <main className={(darkBg ? 'darkBg' : '')}>
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
