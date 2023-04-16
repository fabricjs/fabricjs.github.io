import React from 'react'
import PropTypes from 'prop-types'

export default function GithubEditLink({ relativePath }) {
  return (
    <a
      className="github-edit-link"
      target="_blank"
      rel="noreferrer"
      href={`https://github.com/fabricjs/fabricjs.github.io/tree/development/src/content/${relativePath}`}
    >
      Edit this page on Github
    </a>
  )
}

GithubEditLink.propTypes = {
  relativePath: PropTypes.string.isRequired,
}
