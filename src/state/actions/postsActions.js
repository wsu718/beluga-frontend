import axios from 'axios';

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST_BY_ID_START = 'GET_POST_BY_ID_START';
export const GET_POST_BY_ID_SUCCESS = 'GET_POST_BY_ID_SUCCESS';
export const GET_POST_BY_ID_FAILURE = 'GET_POST_BY_ID_FAILURE';

export const getPosts = () => dispatch => {
    dispatch({ type: GET_POSTS_START })
    axios
        .get(`https://beluga-dev.herokuapp.com/api/posts`)
        .then(res =>
            dispatch({ type: GET_POSTS_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: GET_POSTS_FAILURE, payload: err.response })
        )
}

export const getPostByID = id => dispatch => {
    dispatch({ type: GET_POST_BY_ID_START, id })
    axios
        .get(`https://beluga-dev.herokuapp.com/api/posts?post=${id}`)
        .then(res =>
            dispatch({ type: GET_POST_BY_ID_SUCCESS, payload: res.data })
        )
        .catch(err =>
            dispatch({ type: GET_POST_BY_ID_FAILURE, payload: err.response })
        )
}