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
  EDIT_POST_COMMENT_START,
  EDIT_POST_COMMENT_SUCCESS,
  EDIT_POST_COMMENT_FAILURE,
  DELETE_POST_COMMENT_START,
  DELETE_POST_COMMENT_SUCCESS,
  DELETE_POST_COMMENT_FAILURE,
  ADD_COMMENT_COMMENT_START,
  ADD_COMMENT_COMMENT_SUCCESS,
  ADD_COMMENT_COMMENT_FAILURE,
  POST_VOTE_START,
  POST_VOTE_SUCCESS,
  POST_VOTE_FAILURE,
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
      console.log(action.payload)
      return {
        ...state,
        isFetchingData: false,
        data: state.data.map((item) => {
          if (item.id === action.payload.updatedPost.id) {
            return { ...action.payload.updatedPost };
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
      console.log(action.payload)
      return {
        ...state,
        isFetchingData: false,
        data: [...state.data.filter((data) => data.id !== Number(action.payload))],
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
      console.log(state.data[0].comments);
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
    case EDIT_POST_COMMENT_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case EDIT_POST_COMMENT_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [
          {
            ...state.data[0],
            comments: [
              state.data[0].comments.map((comment) => {
                console.log(comment.id, action.payload.updatedComment);
                if (comment.id === action.payload.updatedComment.id) {
                  console.log(comment);
                  comment.body = action.payload.updatedComment.body;
                  comment.updated_at = action.payload.updatedComment.updated_at;
                  console.log(comment);
                }
                console.log('not it');
                return comment;
              }),
            ],
          },
        ],
      };
    case EDIT_POST_COMMENT_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case DELETE_POST_COMMENT_START:
      return {
        ...state,
        isFetchingData: true,
      };
    case DELETE_POST_COMMENT_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        // data: [
        //   {
        //     ...state.data[0],
        //     comments: [...state.data.comments, action.payload],
        //   },
        // ],
      };
    case DELETE_POST_COMMENT_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };
    case ADD_COMMENT_COMMENT_START:
      return {
        ...state,
        isFetchingData: true,
      };
    // can't figure this out -- this adds the payload to the comment array, not the comments.comments array
    case ADD_COMMENT_COMMENT_SUCCESS:
      return {
        ...state,
        isFetchingData: false,
        data: [
          {
            ...state.data[0],
            comments: [
              ...state.data[0].comments,
              action.payload
            ],
          },
        ],
      };
    // case ADD_COMMENT_COMMENT_SUCCESS:
    //   return {
    //     ...state,
    //     isFetchingData: false,
    //     data: [
    //       {
    //         ...state.data[0],
    //         comments: [
    //           ...state.data[0].comments,
    //           action.payload
    //           // {
    //           //   comments: [
    //           //     action.payload
    //           //   ]
    //           // }
    //         ],
    //       },
    //     ],
    //   };
    case ADD_COMMENT_COMMENT_FAILURE:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };

    case POST_VOTE_START:
      return {
        ...state,
        isFetchingData: true,
      };
    // need to be modified to accept the single new comment
    case POST_VOTE_SUCCESS:
      // console.log(state.data);
      // console.log(action.payload)
      return {
        ...state,
        isFetchingData: false,
        data: state.data.map((item) => {
          if (item.id === action.payload.post_id) {
            return {
              ...item,
              vote_count: item.vote_count + (action.payload.data.up_vote ? 1 : -1)
            };
          }
          return item;
        }),
      };
    case POST_VOTE_FAILURE:
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


// case EDIT_POST_SUCCESS:
//   return {
//     ...state,
//     isFetchingData: false,
//     data: state.data.map((item) => {
//       if (item.id === action.payload.id) {
//         return { ...action.payload };
//       }
//       return item;
//     }),
//   };