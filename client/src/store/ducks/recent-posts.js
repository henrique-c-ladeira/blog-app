import axios from 'axios';

const Types = {
  GET_RECENT_POSTS: 'posts/GET_RECENT_POSTS',
  GET_RECENT_POSTS_SUCCESS: 'posts/GET_RECENT_POSTS_SUCCESS',
  GET_RECENT_POSTS_ERROR: 'posts/GET_RECENT_POSTS_ERROR',
};

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_RECENT_POSTS:
      return { ...state, isLoading: true, posts: [], error: null };
    case Types.GET_RECENT_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: action.payload.posts };
    case Types.GET_RECENT_POSTS_ERROR:
      return { ...state, isLoading: false, posts: action.payload.error };
    default:
      return state;
  }
};

const getRecentPosts = () => ({
  type: Types.GET_RECENT_POSTS,
});

const getRecentPostsSuccess = (posts) => ({
  type: Types.GET_RECENT_POSTS_SUCCESS,
  payload: { posts },
});

const getRecentPostsError = (error) => ({
  type: Types.GET_RECENT_POSTS_ERROR,
  payload: { error },
});

const asyncGetRecentPosts = () => (dispatch) => {
  dispatch(getRecentPosts());
  return axios
    .get('/recent-posts')
    .then((res) => {
      const data = res.data.map((elem) => elem.title);
      dispatch(getRecentPostsSuccess(data));
    })
    .catch((error) => dispatch(getRecentPostsError(error.response.data)));
};

export { asyncGetRecentPosts };
export default reducer;
