import React, { useState } from 'react';

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';
import CreateCommentComment from './CreateCommentComment';
import SubCommentCard from './SubCommentCard';

const CommentCard = ({ comment, handleClick }) => {
  // conditional for showing the comment form
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='mx-12'>
          <div className='my-4'>
            <p> USER NAME HERE {comment.user_id}</p>
          </div>

          <div className='my-4'>
            <p>{comment.body}</p>
          </div>

          <div className='flex my-4'>
            <p>{comment.vote_count}</p>
            <p>
              <IconArrowUp onClick={() => handleClick()} />
            </p>
            <p>
              <IconArrowDown onClick={() => handleClick()} />
            </p>
            <p className='ml-6'>{comment.comments.length}</p>
            <p>
              <IconComment
                onClick={() => {
                  setShowForm(!showForm);
                }}
              />
            </p>
          </div>
          {comment.updateable ? <button>Edit</button> : null}
          {comment.deleteable ? <button>Delete</button> : null}
        </div>
      </div>
      {comment.comments && comment.comments.length > 0
        ? comment.comments.map((comment) => (
            <SubCommentCard comment={comment} key={comment.id} />
          ))
        : null}
      {/* SHOW comment form only when icon is clicked */}
      {showForm ? (
        <CreateCommentComment
          comment_id={comment.id}
          setShowForm={setShowForm}
        />
      ) : null}
    </>
  );
};

export default CommentCard;
