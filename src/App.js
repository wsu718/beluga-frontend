import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import './tailwind.generated.css';

function App() {

  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <LandingPage />
        </Route> */}
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>

        {/* This is going to be "/" after we have cookies working */}
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
