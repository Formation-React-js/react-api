import React from 'react';
import { Person } from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/person/:id" render={
            ({ match }) => <Person id={match.params.id} />
          } />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
