export const initialState = {
    isLoading: false,
    posts: [
        {
            count: 1,
            id: 1,
            header: 'Folks who have substantially improved the quality of your sleep: what worked?',
            body: '',
            user_id: 91919,
            // Will need to pull user_name from user table
            user_name: 'wsul',
            created_at: Date.now(),
            updated_at: Date.now(),
            post_votes: {
                // Will need to sum the votes
                post_vote_count: 19,
                user_up_vote: true,
                user_down_vote: false
            },
            comments: [
                {
                    id: 1010,
                    body: 'I think you should go to sleep earlier!',
                    user_id: 91918,
                    commenter_user_name: 'Franklin Joe',
                    created_at: Date.now(),
                    comment_vote_count: 4,
                    comments: [
                        {
                            id: 1010,
                            body: 'I think you should go to sleep earlier!',
                            user_id: 91918,
                            commenter_user_name: 'Franklin Joe',
                            created_at: Date.now(),
                            comment_vote_count: 1
                        }
                    ]
                },
                {
                    id: 101,
                    body: 'I think you should go to sleep earlier!',
                    user_id: 91918,
                    commenter_user_name: 'Franklin Joe',
                    created_at: Date.now(),
                    comment_vote_count: 0,
                    comments: []
                }
            ]
        }
    ]
};

export const postsReducer = (state, action) => {
    switch (action.type) {
        case 'upvote':
            console.log(action.payload)
            return {
                ...state,
                posts: [
                    ...state.posts.map(item => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                post_votes: {
                                    ...item.post_votes,
                                    post_vote_count: item.post_votes.post_vote_count + 1
                                }
                            }
                        }
                        return item
                    })
                ]
            }
        default:
            return state;
    }
}