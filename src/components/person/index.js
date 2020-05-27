import React from 'react';
import { Card } from 'react-bootstrap';
import { parseApiUrl } from '../../utils';
import { Planet } from '..';
import ApiContainer from '../api-container';
import Link from './link';

const Person = ({ id }) => {
  return (
    <ApiContainer
      type="people"
      id={id}
    >
      {(person) =>
        <Card>
          <Card.Header as="h3">{person.name}</Card.Header>
          <Card.Body>
            <Card.Text>Height: {person.height}</Card.Text>
            <Card.Text>Mass: {person.mass}</Card.Text>
            <Card.Text>Homeworld:
              <Planet.Link id={parseApiUrl(person.homeworld).id} />
            </Card.Text>
          </Card.Body>
        </Card>
      }
    </ApiContainer>
  );
}

Person.Link = Link;
    
export default Person;
