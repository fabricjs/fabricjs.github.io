import React from 'react';
// import PropTypes from 'prop-types';
import './features.css';

const leftFeatures = [
  {
    title: 'Text editing',
    description: 'On-canvas text editing with rich styling, IME and curve support',
  },
  {
    title: 'Complex paths support',
    description: 'Import and draw complex SVG paths composed from hundreds of simple paths',
  },
  {
    title: 'Image filtering',
    description: 'WebGL and Canvas2d customizable and composable picture filters',
  }
];

const rightFeatures = [
  {
    title: 'Typescript support',
    description: 'WebGL and canvas2d image filters',
  }
];

export default function Features() {
  return (
    <section id="features">
      <h2>Fabric.js Features</h2>
      <div className='features-list'>
        <ul className='column-left'>
          {leftFeatures.map((feature, index) => (
          <li key={`${index}`} >
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>  
          </li>))}
        </ul>
        <ul className='column-right'>
        {rightFeatures.map((feature, index) => (
          <li key={`${index}`}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>  
          </li>))}
        </ul>
      </div>
    </section>
  );
}
