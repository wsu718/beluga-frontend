import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { postVote } from '../state/actions/index';

// import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
// import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
// import { ReactComponent as IconComment } from '../images/icon-comment.svg';

import { ReactComponent as Replies } from '../images/chat.svg';
import { ReactComponent as Heart } from '../images/heart.svg';

import Profile from '../images/ws.jpg'

const PostCard = ({ post, postVote }) => {
  let history = useHistory();

  // const handleUpvote = () => {
  //   postVote(post.id, { up_vote: true });
  // };
  // const handleDownvote = () => {
  //   postVote(post.id, { down_vote: true });
  // };

  return (
    <div className='overflow-hidden border-b border-gray-200 pt-4'>
      <div className="flex items-center px-4">
        {/* Profile image */}
        <div className="flex-shrink-0">
          <img className="h-10 w-10 rounded-full" src={Profile} alt="" />
        </div>
        {/* Name */}
        <div className="ml-3">
          <div className="text-base font-medium leading-6 text-gray-800">
            {post.name}
          </div>
          {/* Username */}
          <div className="text-sm font-medium leading-5 text-gray-500">
            @{post.user_name}
          </div>
        </div>
      </div>

      {/* Post body */}
      <div className='my-4 ml-16'>
        <p>
          <Link to={`/app/posts/${post.id}`}>{post.header}</Link>
        </p>
      </div>

      {/* Action panel */}
      <div className='flex my-4 ml-16 mx-4'>

        {/* Replies panel */}
        <div className='flex items-center'>
          {/* Reply icon */}
          <div>
            <Replies className="text-gray-500 h-5 w-5 "
              onClick={() => {
                history.push(`/app/posts/${post.id}`);
              }}
            />
          </div>
          {/* Reply count */}
          <div className='text-gray-500 text-sm ml-1'>
            {post.comment_count}
          </div>
        </div>

        {/* Upvotes panel */}
        <div className='flex items-center ml-3'>
          {/* Vote icon */}
          <div>
            <Heart className="text-gray-500 h-5 w-5"
              onClick={() => {
                history.push(`/app/posts/${post.id}`);
              }}
            />
          </div>
          {/* Vote count */}
          <div className='text-gray-500 text-sm ml-1'>
            {post.vote_count}
          </div>

        </div>

      </div>
    </div>
  );
};

export default connect(null, { postVote })(PostCard);
