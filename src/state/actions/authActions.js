import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const LOGOUT_START = 'LOGOUT_START';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const CHECK_COOKIE_SUCCESS = 'CHECK_COOKIE_SUCCESS';


export const login = (data) => (dispatch) => {
  axios.defaults.withCredentials = true;

  dispatch({ type: LOGIN_START });
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/login`, data)
    .then((res) => {
      console.log(res);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response,
      });
    });
};

export const registerAction = (data) => (dispatch) => {
  axios.defaults.withCredentials = true;

  dispatch({ type: REGISTER_START });
  return axios
    .post(`${process.env.REACT_APP_API_URL}/api/register`, data)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    })
    .then(() => {
      dispatch({ type: LOGIN_START });
      return axios
        .post(`${process.env.REACT_APP_API_URL}/api/login`, data)
        .then((res) => {
          console.log(res);
          dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: LOGIN_FAILURE,
            payload: err.response,
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: err.response.data,
      });
    });
};

// logout clears session from user and server as well as clearing the token from the cookie
export const logout = () => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: LOGOUT_START });
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/logout`)
    .then((res) => dispatch({ type: LOGOUT_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: LOGOUT_FAILURE, payload: err.response }));
};

export const checkCookie = () => {
  return {
    type: CHECK_COOKIE_SUCCESS
  }
}