import axios from 'axios';

const Types = {
  GET_POSTS: 'posts/GET_POSTS',
  GET_POSTS_SUCCESS: 'posts/GET_POSTS_SUCCESS',
  GET_POSTS_ERROR: 'posts/GET_POSTS_ERROR',
};

const initialState = {
  posts: [],
  error: null,
  isLoading: false,
  pageCount: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_POSTS:
      return { ...state, isLoading: true, posts: [], error: null };
    case Types.GET_POSTS_SUCCESS:
      return { ...state, isLoading: false, posts: action.payload.posts, pageCount: action.payload.pageCount};
    case Types.GET_POSTS_ERROR:
      return { ...state, isLoading: false, posts: action.payload.error };
    default:
      return state;
  }
};

const getPosts = () => ({
  type: Types.GET_POSTS,
});

const getPostsSuccess = (posts, pageCount) => ({
  type: Types.GET_POSTS_SUCCESS,
  payload: { posts, pageCount },
});

const getPostsError = (error) => ({
  type: Types.GET_POSTS_ERROR,
  payload: { error },
});

const asyncGetPosts = (page) => (dispatch) => {
  dispatch(getPosts());
  return axios
    .get('/posts',{params:{page}})
    .then((res) => {
      const {pageCount} = res.data;
      const data = res.data.posts.map(elem => {
        const date = new Date(elem.createdAt)
        const createdAt = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}`
        return ({
          ...elem, createdAt
        })
      });
      dispatch(getPostsSuccess(data, pageCount));
    })
    .catch((error) => dispatch(getPostsError(error.response.data)));
};

export { asyncGetPosts };
export default reducer;
