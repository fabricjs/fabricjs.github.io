import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import './prevNextLinks.css'

export default function PrevNextLinks({ prev, next }) {
  return (
    <nav id="prevNextPostLinks">
      {(prev || next) && (
        <ul>
          {prev && (
            <li className="prevPost">
              <Link to={prev.slug}>{prev.title}</Link>
            </li>
          )}
          {next && (
            <li className="nextPost">
              <Link to={next.slug}>{next.title}</Link>
            </li>
          )}
        </ul>
      )}
    </nav>
  )
}

PrevNextLinks.propTypes = {
  prev: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
  next: PropTypes.shape({
    title: PropTypes.string,
    slug: PropTypes.string,
  }),
}

PrevNextLinks.defaultProps = {
  prev: null,
  next: null,
}
