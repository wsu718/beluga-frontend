import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';


const PostCard = ({ post, handleClick }) => {
    return (
        <div className="px-6 border-b border-gray-200">

            <div className="my-4">
                <p>{post.user_name}</p>
            </div>

            <div className="my-4">
                <p><Link to={`/posts/${post.id}`}>{post.header}</Link></p>
            </div>

            <div className="flex my-4">
                <p>{post.post_votes.post_vote_count}</p>
                <p><IconArrowUp onClick={() => handleClick()} /></p>
                <p><IconArrowDown onClick={() => handleClick()} /></p>
                <p className="ml-6">{post.comments.length}</p>
                <p><IconComment /></p>
            </div>
        </div>
    )
}

export default PostCard;