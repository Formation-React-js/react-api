import React from 'react';
import { Person, Planet } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/people/:id" render={
            ({ match }) => <Person id={match.params.id} />
          } />
          <Route exact path="/planets/:id" render={
            ({ match }) => <Planet id={match.params.id} />
          } />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
