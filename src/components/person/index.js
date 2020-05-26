import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

class Person extends Component {
  state = {
    person: null,
  }

  componentDidMount = () => {
    const { id } = this.props;

    fetch(`https://swapi.dev/api/people/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ person: data }));  
  }

  render = () => {
    const { person } = this.state;

    if (person === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return (
      <Card>
        <Card.Header as="h3">{person.name}</Card.Header>
        <Card.Body>
          <Card.Text>Height: {person.height}</Card.Text>
          <Card.Text>Mass: {person.mass}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Person;
