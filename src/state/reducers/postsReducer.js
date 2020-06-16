import {
    GET_POSTS_START,
    GET_POSTS_FAILURE,
    GET_POSTS_SUCCESS
} from "../actions"


const initialState = {
    isLoading: false,
    error: '',
    data: [
        {
            id: 2111,
            header: "sample header5",
            body: "can be null5",
            user: 1,
            createdAt: "2020-06-11T21:32:13.625Z",
            updatedAt: "2020-06-11T21:32:13.625Z",
            comments: [
                {
                    id: 7,
                    body: "adding a comment",
                    userId: 1,
                    createdAt: "2020-06-11T21:32:22.708Z",
                    updatedAt: "2020-06-11T21:32:22.708Z"
                }
            ]
        }
    ]
};

export const postsReducer = (state = initialState, action) => {
    // console.log(state, action);
    switch (action.type) {
        case GET_POSTS_START:
            return {
                ...state,
                isFetchingData: false
            }
        case GET_POSTS_SUCCESS:
            return {
                ...state,
                isFetchingData: true,
                error: '',
                data: action.payload
            }
        case GET_POSTS_FAILURE:
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