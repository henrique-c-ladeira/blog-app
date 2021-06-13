import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import App from '../App';
import Home from '../modules/home';
import { Header } from '../utils/components/header/header';

const Routes = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/" exact component={Home} />
      {/* <Route path="/posts" component={} /> */}
      <Redirect from="/*" to="/" />
    </Switch>
  </Router>
);

export default Routes;
