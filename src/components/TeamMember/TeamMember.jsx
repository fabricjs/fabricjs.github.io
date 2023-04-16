import React from 'react';
import PropTypes from 'prop-types';
import './teamMember.css';

export const TeamMember = ({ name, children, imgSrc }) => (
    <div className='team-member'>
        <img src={imgSrc} />
        <div className='content'>
        <h3>{name}</h3>
            {children}
        </div>
    </div>
)

TeamMember.propTypes = {
    name: PropTypes.string,
    children: PropTypes.node,
    imgSrc: PropTypes.string,
};
  