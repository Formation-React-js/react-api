import React from 'react';
import { Person, Planet, Film } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './state';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/people/:id" render={
              ({ match }) => <Person id={match.params.id} />
            } />
            <Route exact path="/planets/:id" render={
              ({ match }) => <Planet id={match.params.id} />
            } />
            <Route exact path="/films/:id" render={
              ({ match }) => <Film id={match.params.id} />
            } />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
