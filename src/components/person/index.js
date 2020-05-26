import React, { Component } from 'react';

class Person extends Component {
  state = {
    person: null,
  }

  componentDidMount = () => {
    fetch('https://swapi.dev/api/people/1')
    .then(response => response.json())
    .then(data => this.setState({ person: data }));  
  }

  render = () => {
    const { person } = this.state;

    if (person === null) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1>{person.name}</h1>
      </div>
    );
  }
}

export default Person;
