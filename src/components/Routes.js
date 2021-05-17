import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/calculator" component={App} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
