import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import LandingPage from './pages/LandingPage';
import { useSelector, useDispatch } from 'react-redux';

import './tailwind.generated.css';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const dispatch = useDispatch();

  if (document.cookie.indexOf('beluga') === -1) {
    dispatch({ type: 'CHECK_COOKIE_SUCCESS' })
  }

  return (



    <Router>
      <Switch>
        <Route exact path="/">
          {/* <LandingPage /> */}
          {isLoggedIn ? <Redirect to='/app' /> : <LandingPage />}
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>

        {/* This is going to be "/" after we have cookies working */}
        <Route path="/app">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
