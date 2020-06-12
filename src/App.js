import React, { useReducer } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { postsReducer, initialState } from './reducers/postsReducer';
import { PostsDispatchContext } from './contexts/PostsDispatchContext';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PostPage from './pages/PostPage';

import './tailwind.generated.css';

function App() {

  const [posts, dispatch] = useReducer(postsReducer, initialState)


  // const handleClick = () => {
  //   // dispatch({ type: "INCREASE_VOTE_COUNT" })
  //   console.log('click')
  // }

  return (
    <PostsDispatchContext.Provider value={{ dispatch }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/main">
            <MainPage posts={posts.posts} />
          </Route>
          <Route path="/posts/:id">
            <PostPage posts={posts.posts} />
          </Route>
        </Switch>
      </Router>
    </PostsDispatchContext.Provider>
  );
}

export default App;
