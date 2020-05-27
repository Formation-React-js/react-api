import React from 'react';
import ApiContainer from '../api-container';
import { Card, ListGroup } from 'react-bootstrap';
import { Person } from '..';
import { parseApiUrl } from '../../utils';

const Film = ({ id }) => {
  return (
    <ApiContainer
      type="films"
      id={id}
    >
      {(film) =>
        <Card>
          <Card.Header as="h3">{film.title}</Card.Header>
          <Card.Body>
            <Card.Text>{film.opening_crawl}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            {film.characters.map( (character, index) =>
              <ListGroup.Item key={index}>
                <Person.Link id={parseApiUrl(character).id} />
              </ListGroup.Item>
            )}
          </ListGroup>
        </Card>
      }
    </ApiContainer>
  );
}

export default Film;
