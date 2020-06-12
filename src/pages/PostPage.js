import React from 'react';
import { useParams } from 'react-router-dom';

import CommentCard from '../components/CommentCard';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const PostPage = ({ posts, handleClick }) => {
    const { id } = useParams();
    const post = posts.find(post => post.id === Number(id))

    return (
        <div className="px-6 border-b border-gray-200">

            {/* Original post */}
            <div className=" border-b border-gray-200">
                <div className="my-4">
                    <p>{post.user_name}</p>
                </div>

                <div className="my-4">
                    <p>{post.header}</p>
                </div>

                <div className="flex my-4">
                    <p>{post.post_votes.post_vote_count}</p>
                    <p><IconArrowUp onClick={() => handleClick()} /></p>
                    <p><IconArrowDown onClick={() => handleClick()} /></p>
                    <p className="ml-6">{post.comments.length}</p>
                    <p><IconComment /></p>
                </div>
            </div>

            {/* Comments */}
            <div>
                {post.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
            </div>

        </div>
    )
}

export default PostPage;