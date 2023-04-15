import React from 'react';
import PropTypes from 'prop-types';
import Header from './header/header';
import Footer from './footer/footer';
import SidebarLeft from './sidebarLeft/sidebarLeft';

export default function Layout({ children, leftSidebar }) {
  return (
    <>
      <Header />
      {leftSidebar && typeof (leftSidebar) === 'function' && (
        <SidebarLeft>
          {
            // SidebarLeft makes available 'setVisibility' fn as a param to children
            // eslint-disable-next-line max-len
            // also, we use render prop to render elements inside sideBar instead of some non-dynamic/fixed content
            // So we forward the 'setVisibility' fn as a param to the render prop as well
            (setVisibility) => (leftSidebar(setVisibility))
          }
        </SidebarLeft>
      )}
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  leftSidebar: PropTypes.func,
};

Layout.defaultProps = {
  leftSidebar: null,
};
