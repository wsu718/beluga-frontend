import React, { useState } from 'react';

// import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
// import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const SubCommentCard = ({ comment }) => {
  // conditional for showing the comment form
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='border-b border-gray-200'>
      <div className='mx-24'>
        <div className='my-4'>
          <p>USER NAME HERE {comment.user_id}</p>
        </div>

        <div className='my-4'>
          <p>{comment.body}</p>
        </div>

        <div className='flex my-4'>
          {/* <p>{comment.vote_count}</p>
        <p>
        <IconArrowUp />
        </p>
        <p>
        <IconArrowDown />
        </p>
        {/* <p className='ml-6'>{comment.comments.length}</p> */}
          <p>
            <IconComment
              onClick={() => {
                setShowForm(!showForm);
              }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubCommentCard;
