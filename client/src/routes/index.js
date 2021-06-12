import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import App from '../App';
import Home from '../modules/home';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/posts" component={} /> */}
      <Redirect from="/*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
