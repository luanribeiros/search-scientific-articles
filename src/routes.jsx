import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './app';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Redirect exact from="*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
