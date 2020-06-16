import {
    GET_POSTS_START,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS,
    GET_POST_BY_ID_START,
    GET_POST_BY_ID_FAILURE,
    GET_POST_BY_ID_SUCCESS
} from "../actions"


const initialState = {
    isLoading: false,
    error: '',
    data: []
};

export const postsReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch (action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                isFetchingData: true
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isFetchingData: false,
                error: '',
                data: action.payload
            }
        case GET_POSTS_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        case GET_POST_BY_ID_START:
            return {
                ...state,
                isFetchingData: true
            }
        case GET_POST_BY_ID_SUCCESS:
            return {
                ...state,
                isFetchingData: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case GET_POST_BY_ID_FAILURE:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default postsReducer;