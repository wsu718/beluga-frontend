import React from 'react';
import { useForm } from 'react-hook-form';

import { connect } from 'react-redux';
import { addPostComment } from '../state/actions';

const CreateComment = ({ post_id, addPostComment, setShowForm }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (comment) => {
    console.log(comment);
    addPostComment(post_id, comment);
    reset()
    // setShowForm()
  };

  return (
    <div className='py-6 border-b border-gray-200'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='post_comment' className='sr-only'>
          Post
        </label>
        <div className='mt-1 sm:mt-0 sm:col-span-2'>
          <div className='max-w-lg flex rounded-md shadow-sm'>
            <textarea
              name='body'
              rows='3'
              className='form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5'
              placeholder='Add a comment'
              ref={register}
            ></textarea>
          </div>
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'>
          Comment
        </button>
      </form>
    </div>
  );
};

export default connect(null, { addPostComment })(CreateComment);
