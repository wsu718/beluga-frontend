import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from './containers/LandingPage';
import LoginPage from './containers/LoginPage';
import MainPage from './containers/MainPage';
import ViewPost from './containers/ViewPost';

import './tailwind.generated.css';

function App() {

  const [posts, setPosts] = useState([
    {
      id: 1,
      header: 'Folks who have substantially improved the quality of your sleep: what worked?',
      body: '',
      user_id: 91919,
      // Will need to pull user_name from user table
      user_name: 'wsul',
      created_at: Date.now(),
      updated_at: Date.now(),
      post_votes: {
        // Will need to sum the votes
        post_vote_count: 19,
        user_up_vote: true,
        user_down_vote: false
      },
      comments: [
        {
          id: 1010,
          body: 'I think you should go to sleep earlier!',
          user_id: 91918,
          commenter_user_name: 'Franklin Joe',
          created_at: Date.now(),
          comment_vote_count: 4,
          comments: [
            {
              id: 1010,
              body: 'I think you should go to sleep earlier!',
              user_id: 91918,
              commenter_user_name: 'Franklin Joe',
              created_at: Date.now(),
              comment_vote_count: 1
            }
          ]
        },
        {
          id: 101,
          body: 'I think you should go to sleep earlier!',
          user_id: 91918,
          commenter_user_name: 'Franklin Joe',
          created_at: Date.now(),
          comment_vote_count: 0,
          comments: []
        }
      ]
    }
  ])

  return (
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

  );
}

export default App;
