import { combineReducers } from 'redux';
import postsReducer from './posts';
import recentPostsReducer from './recent-posts';

export const rootReducer = combineReducers({
  posts: postsReducer,
  recentPosts: recentPostsReducer,
});
