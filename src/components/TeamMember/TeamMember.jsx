import React from 'react';
import PropTypes from 'prop-types';
import './teamMember.css';

export const TeamMember = ({ name, githubName, children, imgSrc }) => (
  <div className="team-member">
    <img className="profile" src={imgSrc} />
    <div className="content">
      <h3>
        {name}
        {githubName && (
          <>
            {' '}
            <a
              href={`https://github.com/${githubName}`}
              target="_blank"
              rel="noreferrer"
            >
              @{githubName}
            </a>
            <br />
            <a
              href={`https://github.com/sponsors/${githubName}`}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`https://img.shields.io/static/v1?label=Sponsor%20${githubName}&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86`}
              />
            </a>
          </>
        )}
      </h3>
      {children}
    </div>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string,
  githubName: PropTypes.string,
  children: PropTypes.node,
  imgSrc: PropTypes.string,
};
