import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { feedReducer, initialState } from './reducers/feedReducer';
import { FeedDispatchContext } from './contexts/FeedDispatchContext';

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import ViewPost from './containers/ViewPost';

import './tailwind.generated.css';

function App() {

  const [posts, dispatch] = useReducer(feedReducer, initialState)


  // const handleClick = () => {
  //   // dispatch({ type: "INCREASE_VOTE_COUNT" })
  //   console.log('click')
  // }

  return (
    <FeedDispatchContext.Provider value={{ dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/main">
            <MainPage posts={posts} />
          </Route>
          <Route path="/posts/:id">
            <ViewPost posts={posts} />
          </Route>
        </Switch>
      </Router>
    </FeedDispatchContext.Provider>
  );
}

export default App;
