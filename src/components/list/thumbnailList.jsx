import React from 'react'
import PropTypes from 'prop-types'
import './thumbnailList.css'

export default function ThumbnailList({ children }) {
  return <ul className="thumbList">{children}</ul>
}

ThumbnailList.propTypes = {
  children: PropTypes.node.isRequired,
}
