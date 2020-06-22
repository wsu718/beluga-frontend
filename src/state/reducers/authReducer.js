import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../actions';

const initialState = {
  test: 1,
  isLoading: false,
  isLoggedIn: false,
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case REGISTER_START:
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: null,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    case LOGOUT_START:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        data: [],
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default authReducer;
