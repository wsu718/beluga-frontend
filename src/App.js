import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './containers/LandingPage';

import './tailwind.generated.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
