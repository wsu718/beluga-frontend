import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from './components/Dashboard';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import LandingPage from './components/LandingPage';
import { useSelector } from 'react-redux';

import './tailwind.generated.css';

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  // const dispatch = useDispatch();

  // if (document.cookie.indexOf('beluga') === -1) {
  //   dispatch({ type: 'CHECK_COOKIE_SUCCESS' })
  // }

  return (



    <Router>
      <Switch>
        <Route exact path="/">
          {/* <LandingPage /> */}
          {isLoggedIn ? <Redirect to='/app' /> : <LandingPage />}
        </Route>
        <Route path="/login">
          {isLoggedIn ? <Redirect to='/app' /> : <LoginPage />}
          {/* <LoginPage /> */}
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
