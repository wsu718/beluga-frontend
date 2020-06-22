import axios from 'axios';

// ============ TYPES ============ //

export const GET_POSTS_START = 'GET_POSTS_START';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE';

export const GET_POST_BY_ID_START = 'GET_POST_BY_ID_START';
export const GET_POST_BY_ID_SUCCESS = 'GET_POST_BY_ID_SUCCESS';
export const GET_POST_BY_ID_FAILURE = 'GET_POST_BY_ID_FAILURE';

export const ADD_POST_START = 'ADD_POST_START';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const EDIT_POST_START = 'EDIT_POST_START';
export const EDIT_POST_SUCCESS = 'EDIT_POST_SUCCESS';
export const EDIT_POST_FAILURE = 'EDIT_POST_FAILURE';

export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

export const ADD_POST_COMMENT_START = 'ADD_POST_COMMENT_START';
export const ADD_POST_COMMENT_SUCCESS = 'ADD_POST_COMMENT_SUCCESS';
export const ADD_POST_COMMENT_FAILURE = 'ADD_POST_COMMENT_FAILURE';

export const ADD_COMMENT_COMMENT_START = 'ADD_POST_COMMENT_START';
export const ADD_COMMENT_COMMENT_SUCCESS = 'ADD_POST_COMMENT_SUCCESS';
export const ADD_COMMENT_COMMENT_FAILURE = 'ADD_POST_COMMENT_FAILURE';

export const EDIT_POST_COMMENT_START = 'EDIT_POST_COMMENT_START';
export const EDIT_POST_COMMENT_SUCCESS = 'EDIT_POST_COMMENT_SUCCESS';
export const EDIT_POST_COMMENT_FAILURE = 'EDIT_POST_COMMENT_FAILURE';

export const DELETE_POST_COMMENT_START = 'DELETE_POST_COMMENT_START';
export const DELETE_POST_COMMENT_SUCCESS = 'DELETE_POST_COMMENT_SUCCESS';
export const DELETE_POST_COMMENT_FAILURE = 'DELETE_POST_COMMENT_FAILURE';

// ============ ACTIONS ============ //

export const getPosts = () => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: GET_POSTS_START });
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/posts`)
    .then((res) => dispatch({ type: GET_POSTS_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: GET_POSTS_FAILURE, payload: err.response })
    );
};

export const getPostByID = (id) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: GET_POST_BY_ID_START });
  axios
    .get(`${process.env.REACT_APP_API_URL}/api/posts?post=${id}`)
    .then((res) =>
      dispatch({ type: GET_POST_BY_ID_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: GET_POST_BY_ID_FAILURE, payload: err.response })
    );
};

export const addPost = (data) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: ADD_POST_START });
  axios
    .post(`${process.env.REACT_APP_API_URL}/api/posts`, data)
    .then((res) => dispatch({ type: ADD_POST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: ADD_POST_FAILURE, payload: err.response })
    );
};

export const editPost = (post_id, data) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: EDIT_POST_START });
  axios
    .put(`${process.env.REACT_APP_API_URL}/api/posts?post=${post_id}`, data)
    .then((res) => dispatch({ type: EDIT_POST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: EDIT_POST_FAILURE, payload: err.response })
    );
};

export const deletePost = (id) => (dispatch) => {
  axios.defaults.withCredentials = true;

  dispatch({ type: DELETE_POST_START });
  axios
    .delete(`${process.env.REACT_APP_API_URL}/api/posts?post=${id}`)
    .then((res) => dispatch({ type: DELETE_POST_SUCCESS, payload: res.data }))
    .catch((err) =>
      dispatch({ type: DELETE_POST_FAILURE, payload: err.response })
    );
};

// ============ ADD A COMMENT TO A POST ============ //
export const addPostComment = (post_id, data) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: ADD_POST_COMMENT_START });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/pComments?post=${post_id}`,
      data
    )
    .then((res) =>
      dispatch({ type: ADD_POST_COMMENT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ADD_POST_COMMENT_FAILURE, payload: err.response })
    );
};

// ============ EDIT A COMMENT ON A POST ============ //
export const editPostComment = (comment_id, data) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: EDIT_POST_COMMENT_START });
  axios
    .put(
      `${process.env.REACT_APP_API_URL}/api/pComments?comment=${comment_id}`,
      data
    )
    .then((res) =>
      dispatch({ type: EDIT_POST_COMMENT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: EDIT_POST_COMMENT_FAILURE, payload: err.response })
    );
};

// ============ Delete A COMMENT ON A POST ============ //
export const deletePostComment = (comment_id) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: DELETE_POST_COMMENT_START });
  axios
    .delete(
      `${process.env.REACT_APP_API_URL}/api/pComments?comment=${comment_id}`
    )
    .then((res) =>
      dispatch({ type: DELETE_POST_COMMENT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: DELETE_POST_COMMENT_FAILURE, payload: err.response })
    );
};

// ============ ADD A COMMENT TO A COMMENT ============ //
export const addCommentComment = (comment_id, data) => (dispatch) => {
  axios.defaults.withCredentials = true;
  dispatch({ type: ADD_COMMENT_COMMENT_START });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/api/cComments?comment=${comment_id}`,
      data
    )
    .then((res) =>
      dispatch({ type: ADD_COMMENT_COMMENT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: ADD_COMMENT_COMMENT_FAILURE, payload: err.response })
    );
};
