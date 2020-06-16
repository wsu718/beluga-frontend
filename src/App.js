import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import AppPage from './pages/AppPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

import './tailwind.generated.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
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
