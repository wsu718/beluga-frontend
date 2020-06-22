import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import { editPostComment, deletePostComment } from '../state/actions/index';

import { useForm } from 'react-hook-form';

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

import CreateCommentComment from './CreateCommentComment';
import SubCommentCard from './SubCommentCard';

const CommentCard = ({
  comment,
  handleClick,
  editPostComment,
  deletePostComment,
}) => {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  // conditional for showing the comment form
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);

  const onSubmit = (data) => {
    setEditing(false);
    editPostComment(comment.id, data);
  };

  const handleDelete = () => {
    console.log(comment.id);
    deletePostComment(comment.id);
    // Where do we want to send back to
    history.push(`/app`);
  };

  return (
    <>
      <div className=' border-b border-gray-200'>
        <div className='mx-12'>
          <div className='my-4'>
            <p> USER NAME HERE {comment.user_id}</p>
          </div>
          {!editing ? (
            <>
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
                <p className='ml-6'>{comment.comments?.length}</p>
                <p>
                  <IconComment
                    onClick={() => {
                      setShowForm(!showForm);
                    }}
                  />
                </p>
              </div>
            </>
          ) : (
            <>
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
                      defaultValue={comment.body}
                      ref={register}
                    ></textarea>
                  </div>
                </div>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded'>
                  Save
                </button>
              </form>
            </>
          )}

          {comment.updateable ? (
            !editing ? (
              <button
                onClick={() => {
                  setEditing(true);
                }}
              >
                Edit
              </button>
            ) : null
          ) : null}
          {comment.deleteable ? (
            <button onClick={handleDelete}>Delete</button>
          ) : null}
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

export default connect(null, { editPostComment, deletePostComment })(
  CommentCard
);
