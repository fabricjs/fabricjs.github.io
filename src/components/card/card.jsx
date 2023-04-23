import React from 'react'
import PropTypes from 'prop-types'
import './card.css'

export default function Card({ children }) {
  return (
    <div className="card">
      {/* props.title && (<h4>{props.title}</h4>) */}
      {children}
    </div>
  )
}

Card.propTypes = {
  // title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
