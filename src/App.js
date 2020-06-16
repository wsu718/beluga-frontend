import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import AppPage from './pages/AppPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';

import './tailwind.generated.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/app">
          <AppPage />
        </Route>
        <Route path="/posts/:id">
          <PostPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
