import React from 'react';
import './sidebarLeft.css';
import PropTypes from 'prop-types';

export default function SidebarLeft({ children }) {
  const [visibility, setVisibility] = React.useState(false);

  return (
    <aside className={visibility ? 'open' : 'closed'} id="sidebarLeft">
      <div role="button" tabIndex={0} onClick={() => setVisibility(false)} id="sidebarLeftModalBg" />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={() => setVisibility(!visibility)} />
      <div id="sideBarLeftContentWrap">
        {/* props.children */}
        {children(setVisibility)}
      </div>
      {/* https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children */}
    </aside>
  );
}

SidebarLeft.propTypes = {
  children: PropTypes.node.isRequired,
};
