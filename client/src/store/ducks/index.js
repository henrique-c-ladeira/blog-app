import { combineReducers } from 'redux';
import postsReducer from './posts';
import recentPostsReducer from './recent-posts';
import authenticationReducer from './authenticate';

export const rootReducer = combineReducers({
  user: authenticationReducer,
  posts: postsReducer,
  recentPosts: recentPostsReducer,
});
