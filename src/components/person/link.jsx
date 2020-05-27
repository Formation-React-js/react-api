import React from 'react';
import ApiContainer from '../api-container';
import { Link } from 'react-router-dom';

const PersonLink = ({ id }) => {
  return (
    <ApiContainer
      type="people"
      id={id}
    >
      {(person) =>
        <Link to={`/people/${id}`}>
          {person.name}
        </Link>
      }
    </ApiContainer>
  );
}

export default PersonLink;
