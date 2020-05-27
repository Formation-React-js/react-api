import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import { connect } from 'react-redux';
import store from '../state';

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

    const object = this.props[type].data[id];

    if (typeof object === 'undefined') {
      store.dispatch({
        type: `FETCH_${type.toUpperCase()}`,
        id
      });
      fetch(`https://swapi.dev/api/${type}/${id}`)
      .then(response => {
        if (response.status === 404) {
          throw new Error('Not found');
        }
        return response.json();
      })
      .then(data => store.dispatch({
        type: `FETCH_${type.toUpperCase()}_SUCCESS`,
        id,
        data,
      }))
      .catch(error => store.dispatch({
        type: `FETCH_${type.toUpperCase()}_ERROR`,
        id,
        error: error.message,
      }));
    }
  }

  render = () => {
    const { children, type, id } = this.props;

    const object = this.props[type].data[id];

    // Tant que la requête à l'API n'a pas répondu, afficher un loader
    if (typeof object === 'undefined') {
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      );
    }

    // Dès que la requête a répondu, renvoie l'affichage normal du
    // composant supérieur, en lui passant les données de l'API
    // comme paramètre
    return children(object);
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ApiContainer);
