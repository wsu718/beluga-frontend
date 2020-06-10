import React from 'react';

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const CommentCard = ({ comment, handleClick }) => {
    return (
        <div className="border-b border-gray-200">

            <div className="my-4">
                <p>{comment.commenter_user_name}</p>
            </div>

            <div className="my-4">
                <p>{comment.body}</p>
            </div>

            <div className="flex my-4">
                <p>{comment.comment_vote_count}</p>
                <p><IconArrowUp onClick={() => handleClick()} /></p>
                <p><IconArrowDown onClick={() => handleClick()} /></p>
                <p className="ml-6">{comment.comments.length}</p>
                <p><IconComment /></p>
            </div>
        </div>
    )
}

export default CommentCard;