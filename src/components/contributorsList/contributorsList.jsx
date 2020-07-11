import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// import PropTypes from 'prop-types';
import HorizontalPanList from '../horizontalPanList/horizontalPanList';
import ContributorCard from './contributorCard';
import './contributorsList.css';

export default function ContributorsList() {
  const data = useStaticQuery(graphql`
  query ContributorsQuery {
    allContributor(limit: 10) {
      nodes {
        name
        picUrl
        url
      }
    }
  }
`);
  return (
    <HorizontalPanList
      customClass="contributorsList"
      customLastItem={() => (
        <span key="view-all-contributors">
          <a rel="noreferrer" target="_blank" href="https://github.com/fabricjs/fabric.js/graphs/contributors">View all contributors on Github</a>
        </span>
      )}
    >
      {data.allContributor.nodes.map(({ name, picUrl, url }) => (
        <ContributorCard key={name + picUrl} name={name} picUrl={picUrl} url={url} />
      ))}
    </HorizontalPanList>
  );
}
