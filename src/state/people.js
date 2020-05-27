const initialState = {
  loading: {},
  data: {},
  error: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PEOPLE':
      console.log(`Fetching person ${action.id}`);
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

    case 'FETCH_PEOPLE_SUCCESS':
      console.log(`Succesfully fetched person ${action.id}`);
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

    case 'FETCH_PEOPLE_ERROR':
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
