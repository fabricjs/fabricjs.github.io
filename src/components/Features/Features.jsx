import React from 'react'
// import PropTypes from 'prop-types';
import './features.css'

const leftFeatures = [
  {
    title: 'Text editing',
    description:
      'On-canvas text editing with rich styling, IME and curve support',
  },
  {
    title: 'Complex paths support',
    description:
      'Import and draw complex SVG paths composed from hundreds of simple paths',
  },
  {
    title: 'Image filtering',
    description: 'WebGL and Canvas2d customizable and composable picture filters',
  },
  {
    title: 'Animation',
    description: 'Support for tweening/easing of position, transformation, and style',
  },
  {
    title: 'Clip paths',
    description: 'Create a clipping region for an object, group, or the whole canvas from any other Fabric object',
  }
];

const rightFeatures = [
  {
    title: 'Flexible controls',
    description: 'On-canvas controls for scale, rotation, and skew, and a powerful custom control API',
  },
  {
    title: 'Typescript support',
    description: 'Written in Typescript for a streamlined workflow and easy debugging',
  },
  {
    title: 'Object grouping',
    description: 'Group multiple objects together for selection and transformation',
  },
  {
    title: 'Viewport transformations',
    description: 'Easily zoom & pan the canvas while maintaining render quality',
  },
  {
    title: 'Object caching',
    description: 'A powerful caching system for fast drawing of complex paths & images',
  },
];

export default function Features() {
  return (
    <section id="features">
      <h2>Fabric.js Features</h2>
      <div className="features-list">
        <ul className="column-left">
          {leftFeatures.map((feature, index) => (
            <li key={`${index}`}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
        <ul className="column-right">
          {rightFeatures.map((feature, index) => (
            <li key={`${index}`}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
