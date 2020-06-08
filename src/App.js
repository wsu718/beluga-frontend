import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Landing from './components/Landing';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
