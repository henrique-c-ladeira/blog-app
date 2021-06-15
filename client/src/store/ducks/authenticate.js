import axios from 'axios';
import jwtDecode from 'jwt-decode';

const Types = {
  AUTH: 'authenticate/AUTH',
  AUTH_SUCCESS: 'authenticate/AUTH_SUCCESS',
  AUTH_ERROR: 'authenticate/AUTH_ERROR',
};

const initialState = {
  id: null,
  name: null,
  loggedIn: false,
  isLoading: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.AUTH:
      return { ...state, isLoading: true, error: null };
    case Types.AUTH_SUCCESS:
      return { ...state, isLoading: false, name: action.payload.name, id: action.payload.id, loggedIn: true, error: null};
    case Types.AUTH_ERROR:
      return { ...state, isLoading: false, name: null, id: null, loggedIn: false, error: action.payload.error };
    default:
      return state;
  }
};

const auth = () => ({
  type: Types.AUTH,
});

const authSuccess = (id, name) => ({
  type: Types.AUTH_SUCCESS,
  payload: { id, name },
});

const authError = (error) => ({
  type: Types.AUTH_ERROR,
  payload: { error },
});

const asyncAuth = (email, password) => (dispatch) => {
  dispatch(auth());
  return axios
    .post('/token',{email, password})
    .then((res) => {
      const { id, name } = jwtDecode(res.data.jwt);
      dispatch(authSuccess(id, name));
    })
    .catch((error) => dispatch(authError(error.response.data)));
};

export { asyncAuth };
export default reducer;
