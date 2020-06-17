import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const PostCard = ({ post }) => {

    return (
        <div className="px-6 border-b border-gray-200">

            <div className="my-4">
                <p>{post.user}</p>
            </div>

            <div className="my-4">
                <p><Link to={`app/posts/${post.id}`}>{post.header}</Link></p>
            </div>

            <div className="flex my-4">
                {/* <p>{post.post_votes.post_vote_count}</p> */}
                <p><IconArrowUp onClick={() => console.log('test')} /></p >
                <p><IconArrowDown onClick={() => console.log('test')} /></p>
                <p className="ml-6">{post.comments?.length}</p>
                <p><IconComment /></p>
            </div>



            {/* <Route path={`/posts/:id`} component={PostPage} /> */}


        </div>
    )
}

export default PostCard;