import axios from 'axios';

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const getPosts = () => dispatch => {
    dispatch({ type: GET_POSTS_START })
    axios
        .get(`https://beluga-dev.herokuapp.com/api/posts`)
        .then(res =>
            dispatch({ type: GET_POSTS_SUCCESS, payload: res.data })
        )
        .catch(err => dispatch({ GET_POSTS_FAILURE, payload: err.response }))
}