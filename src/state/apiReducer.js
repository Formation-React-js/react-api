export const fetchObject = (type) => (id) => ({
  type: `FETCH_${type.toUpperCase()}`,
  id
});

export const fetchObjectSuccess = (type) => (id, data) => ({
  type: `FETCH_${type.toUpperCase()}_SUCCESS`,
  id,
  data,
});

export const fetchObjectError = (type) => (id, error) => ({
  type: `FETCH_${type.toUpperCase()}_ERROR`,
  id,
  error: error.message,
});

export const mapDispatchToProps = (dispatch) => ({
  fetchObject: (type, id) => dispatch(fetchObject(type)(id)),
  fetchObjectSuccess: (type, id, data) => dispatch(fetchObjectSuccess(type)(id, data)),
  fetchObjectError: (type, id, error) => dispatch(fetchObjectError(type)(id, error)),
});

const initialState = {
  loading: {},
  data: {},
  error: {},
};

export default (type) => (state = initialState, action) => {
  switch (action.type) {
    case `FETCH_${type.toUpperCase()}`:
      console.log(`Fetching ${type} #${action.id}`);
      // Lorsqu'on lance une requête pour récupérer une planète
      // On doit renvoyer une copie intégrale des données dans le store
      return {
        // On garde l'ensemble des données actuellement présentes...
        ...state,
        // ...mais on veut introduire un changement dans la clé "loading"
        loading: {
          // On garde l'ensemble de l'objet "loading"...
          ...state.loading,
          // ...mais on rajoute (ou on écrase) la valeur liée à l'index
          // de la planète qu'on est parti chercher
          [action.id]: true,
        },
      };

    case `FETCH_${type.toUpperCase()}_SUCCESS`:
      console.log(`Succesfully fetched ${type} #${action.id}`);
      // Lorsque la requête pour récupérer une planète a répondu
      // On doit renvoyer une copie intégrale des données dans le store
      return {
        // On garde l'ensemble des données actuellement présentes...
        ...state,
        // ...mais on veut introduire un changement dans la clé "loading"
        loading: {
          // On garde l'ensemble de l'objet "loading"...
          ...state.loading,
          // ...mais on rajoute (ou on écrase) la valeur liée à l'index
          // de la planète qu'on a récupérée
          [action.id]: false,
        },
        // ...et on veut introduire un changement dans la clé "data"
        data: {
          // On garde l'ensemble de l'objet "data"
          ...state.data,
          // ...mais on rajoute (ou on écrase) la valeur liée à l'index
          // de la planète qu'on a récupérée
          [action.id]: action.data,
        },
      };

    case `FETCH_${type.toUpperCase()}_ERROR`:
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.id]: false,
        },
        error: {
          ...state.error,
          [action.id]: action.error,
        },
      };
    
    default:
      return state;
  }
}
