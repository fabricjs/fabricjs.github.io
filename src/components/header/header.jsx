import React from 'react';
import { Link } from 'gatsby';
import './header.css';
import logo from '../../images/fabricjs-logo.png';
import CarbonAd from '../CarbonAd/CarbonAd';

export default function Header() {
  return (
    <>
      <header id="site-header">
        <Link id="logo" to="/"><img alt="FabricJS logo" src={logo} /></Link>
        <nav>
          <ul>
            <li><Link activeClassName="active" to="/">Home</Link></li>
            <li><Link activeClassName="active" to="/demos">Demos</Link></li>
            <li><Link activeClassName="active" to="/docs">Docs</Link></li>
            <li><Link activeClassName="active" to="/customize-build">Customize build</Link></li>
            <li><Link activeClassName="active" to="/support">Support</Link></li>
            <li><Link activeClassName="active" to="/team">Team</Link></li>
          </ul>

        </nav>
        {/* <span>Search bar here</span> */}

      </header>
      <CarbonAd />
    </>
  );
}
