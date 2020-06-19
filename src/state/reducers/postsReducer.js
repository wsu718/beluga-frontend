import {
  GET_POSTS_START,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_FAILURE,
  GET_POST_BY_ID_SUCCESS,
  ADD_POST_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  EDIT_POST_FAILURE,
  EDIT_POST_START,
  EDIT_POST_SUCCESS,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAILURE,
  ADD_POST_COMMENT_START,
  ADD_POST_COMMENT_SUCCESS,
  ADD_POST_COMMENT_FAILURE,
} from '../actions';

const initialState = {
  isFetchingData: false,
  error: '',
  data: [],
};

export const postsReducer = (state = initialState, action) => {
  // console.log(state, action);
  switch (action.type) {
    case GET_POSTS_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        error: '',
        data: action.payload,
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case GET_POST_BY_ID_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [action.payload],
      };
    case GET_POST_BY_ID_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_POST_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [action.payload, ...state.data],
      };
    case EDIT_POST_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case EDIT_POST_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case EDIT_POST_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: state.data.map((item) => {
          if (item.id === action.payload.id) {
            return { ...action.payload };
          }
          return item;
        }),
      };
    case DELETE_POST_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [...state.data.filter((data) => data.id !== action.payload.id)],
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_POST_COMMENT_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case ADD_POST_COMMENT_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [
          {
            ...state.data[0],
            comments: [...state.data[0].comments, action.payload],
          },
        ],
      };

    case ADD_POST_COMMENT_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postsReducer;
