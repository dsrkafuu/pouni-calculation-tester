/* deps */
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
/* views */
import Home from './views/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">a</Route>
        <Route path="/users">b</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
