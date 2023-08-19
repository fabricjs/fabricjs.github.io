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

// https://github.com/primer/octicons/blob/main/icons/heart-24.svg
export const GithubSponsorsButton = ({ githubName }) => (
  <a
    href={`https://github.com/sponsors/${githubName}`}
    target="_blank"
    rel="noreferrer"
    className="sponsor-button"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="m12 20.703.343.667a.748.748 0 0 1-.686 0l-.003-.002-.007-.003-.025-.013a31.138 31.138 0 0 1-5.233-3.576C3.8 15.573 1 12.332 1 8.514v-.001C1 5.053 3.829 2.5 6.736 2.5 9.03 2.5 10.881 3.726 12 5.605 13.12 3.726 14.97 2.5 17.264 2.5 20.17 2.5 23 5.052 23 8.514c0 3.818-2.801 7.06-5.389 9.262a31.148 31.148 0 0 1-5.233 3.576l-.025.013-.007.003-.002.001ZM6.736 4C4.657 4 2.5 5.88 2.5 8.514c0 3.107 2.324 5.96 4.861 8.12a29.655 29.655 0 0 0 4.566 3.175l.073.041.073-.04c.271-.153.661-.38 1.13-.674.94-.588 2.19-1.441 3.436-2.502 2.537-2.16 4.861-5.013 4.861-8.12C21.5 5.88 19.343 4 17.264 4c-2.106 0-3.801 1.389-4.553 3.643a.751.751 0 0 1-1.422 0C10.537 5.389 8.841 4 6.736 4Z" />
    </svg>
    Sponsor
  </a>
);

export const TeamMemberName = ({ name, githubName }) => (
  <strong>
    {name} <GithubLink githubName={githubName} />
  </strong>
);

export const TeamMember = ({ githubName, children, imgSrc, withSponsor }) => (
  <div className="team-member">
    <div className="content">
      <img className="profile" src={imgSrc} />
    </div>
    <div className="content">
      {children}
      {withSponsor && <GithubSponsorsButton githubName={githubName} />}
    </div>
  </div>
);

TeamMember.propTypes = {
  name: PropTypes.string,
  githubName: PropTypes.string,
  children: PropTypes.node,
  imgSrc: PropTypes.string,
  withSponsor: PropTypes.bool,
};
