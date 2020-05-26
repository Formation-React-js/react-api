import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';

// Ce composant est responsable d'aller chercher les données dans l'API
// et affiche le rendu normal du composant qui l'a appelé uniquement
// une fois que celles-ci sont arrivées
class ApiContainer extends Component {
  state = {
    data: null,
  }

  // Au moment où le composant est créé, envoie une requête à l'API
  // et stocke le résultat dans son state
  componentDidMount = () => {
    const { type, id } = this.props;

    fetch(`https://swapi.dev/api/${type}/${id}`)
    .then(response => response.json())
    .then(data => this.setState({ data }))
  }

  render = () => {
    const { children } = this.props;
    const { data } = this.state;

    // Tant que la requête à l'API n'a pas répondu, afficher un loader
    if (data === null) {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    // Dès que la requête a répondu, renvoie l'affichage normal du
    // composant supérieur, en lui passant les données de l'API
    // comme paramètre
    return children(data);
  }
}

export default ApiContainer;
