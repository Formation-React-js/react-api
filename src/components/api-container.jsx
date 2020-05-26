import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

class ApiContainer extends Component {
  state = {
    data: null,
  }

  componentDidMount = () => {
    const { type, id } = this.props;

    fetch(`https://swapi.dev/api/${type}/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render = () => {
    const { children } = this.props;
    const { data } = this.state;

    if (data === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    return children(data);
  }
}

export default ApiContainer;
