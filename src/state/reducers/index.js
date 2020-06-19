import { combineReducers } from 'redux';

import authReducer from './authReducer';
import postsReducer from './postsReducer';

export const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});
