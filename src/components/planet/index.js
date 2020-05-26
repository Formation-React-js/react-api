import React, { Component } from 'react';
import { Card, Spinner } from 'react-bootstrap';

class Planet extends Component {
  state = {
    planet: null,
  }

  componentDidMount = () => {
    const { id } = this.props;

    fetch(`https://swapi.dev/api/planets/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ planet: data }));  
  }

  render = () => {
    const { planet } = this.state;

    if (planet === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return (
      <Card>
        <Card.Header as="h3">{planet.name}</Card.Header>
        <Card.Body>
          <Card.Text>Diameter: {planet.diameter}</Card.Text>
          <Card.Text>Climate: {planet.climate}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Planet;
