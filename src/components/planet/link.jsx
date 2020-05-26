import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class PlanetLink extends Component {
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
    const { id } = this.props;
    const { planet } = this.state;

    if (planet === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return (
      <Link to={`/planets/${id}`}>
        {planet.name}
      </Link>
    );
  }
}

export default PlanetLink;
