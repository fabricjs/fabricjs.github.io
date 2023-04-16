import React from 'react';
// import PropTypes from 'prop-types';
import './featuredBanner.css';

export default function FeaturedBanner() {
  return (
    <section id="featuredBanner">
      <h1>Fabric.JS - <span>An extensive object-oriented 2D canvas library for web applications</span></h1>
      <div id="featuresList">
        <div className="col">
          <h2>Power</h2>
          <p>A powerful feature set, including rich text formatting, complex shapes, svg import & export, groups, filters, animations, and much more!</p>
        </div>
        <div className="col">
          <h2>Performance</h2>
          <p>Advanced object caching and a WebGL-powered filter engine ensures fast and consistent performance even for highly complex canvases.</p>
        </div>
        <div className="col">
          <h2>Simplicity</h2>
          <p>A simple object-oriented structure for easy object creation, manipulation, and serialization.</p>
        </div>
        <div className="col">
          <h2>Flexibility</h2>
          <p>Open-source and fully extensible, with a modular design and custom build support.</p>
        </div>
      </div>
      <p>Also make available links to download and getting-started docs</p>
    </section>
  );
}
