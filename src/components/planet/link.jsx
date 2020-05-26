import React from 'react';
import { Link } from 'react-router-dom';
import ApiContainer from '../api-container';

const PlanetLink = ({ id }) => {
  return (
    <ApiContainer
      type="planets"
      id={id}
    >
      {(planet) =>
        <Link to={`/planets/${id}`}>
          {planet.name}
        </Link>
      }
    </ApiContainer>
  );
}

export default PlanetLink;
