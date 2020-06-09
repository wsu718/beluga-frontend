import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';

import './tailwind.generated.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/login'>
          <LoginPage />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
