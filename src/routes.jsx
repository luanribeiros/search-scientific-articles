import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './app';
import Favorites from './pages/Favorites';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/favorites" component={Favorites} />
      <Redirect exact from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
