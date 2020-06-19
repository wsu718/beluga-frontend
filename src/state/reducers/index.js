import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postsReducer from './postsReducer';
import commentReducer from './commentReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  comments: commentReducer,
});
