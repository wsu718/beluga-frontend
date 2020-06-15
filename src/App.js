import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import AppPage from './pages/AppPage';
import PostPage from './pages/PostPage';

import './tailwind.generated.css';

function App() {

  // const handleClick = () => {
  //   // dispatch({ type: "INCREASE_VOTE_COUNT" })
  //   console.log('click')
  // }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <LoginPage />
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
