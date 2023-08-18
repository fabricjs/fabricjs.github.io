import React from 'react';
import PropTypes from 'prop-types';
import './teamMember.css';

export const GithubLink = ({ githubName }) => (
  <strong>
    <a
      href={`https://github.com/${githubName}`}
      target="_blank"
      rel="noreferrer"
    >
      @{githubName}
    </a>
  </strong>
);

export const GithubSponsorsButton = ({ githubName }) => (
  <a
    href={`https://github.com/sponsors/${githubName}`}
    target="_blank"
    rel="noreferrer"
  >
    <img
      src={`https://img.shields.io/static/v1?label=Sponsor%20@${githubName}&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86`}
    />
  </a>
);

export const TeamMemberName = ({ name, githubName }) => (
  <strong>
    {name} <GithubLink githubName={githubName} />
  </strong>
);

export const TeamMember = ({ githubName, children, imgSrc }) => (
  <div className="team-member">
    <div className="content">
      <img className="profile" src={imgSrc} />
    </div>
    <div className="content">
      {children}
      {githubName && <GithubSponsorsButton githubName={githubName} />}
    </div>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string,
  githubName: PropTypes.string,
  children: PropTypes.node,
  imgSrc: PropTypes.string,
};
