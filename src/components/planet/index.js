import React from 'react';
import Link from './link';
import { Card } from 'react-bootstrap';
import ApiContainer from '../api-container';

const Planet = ({ id }) => {
  return (
    <ApiContainer
      type="planets"
      id={id}
    >
      {(planet) =>
        <Card>
          <Card.Header as="h3">{planet.name}</Card.Header>
          <Card.Body>
            <Card.Text>Diameter: {planet.diameter}</Card.Text>
            <Card.Text>Climate: {planet.climate}</Card.Text>
          </Card.Body>
        </Card>
      }
    </ApiContainer>
  );
}

Planet.Link = Link;

export default Planet;
