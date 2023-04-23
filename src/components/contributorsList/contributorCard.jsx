import React from 'react'
import PropTypes from 'prop-types'
import './contributorCard.css'

export default function ContributorCard({ name, picUrl, url }) {
  return (
    <a
      rel="noreferrer"
      target="_blank"
      href={url}
      className="contributorCard"
      draggable="false"
      onDragStart={(e) => {
        e.preventDefault()
        return false
      }}
    >
      <img src={picUrl} alt={name} />
      <h4>{name}</h4>
    </a>
  )
}

ContributorCard.propTypes = {
  name: PropTypes.string.isRequired,
  picUrl: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

// ContributorCard.defaultProps = {
//  name: null,
// };
