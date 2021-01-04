import React, { useState } from 'react';

// import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
// import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

import { connect } from 'react-redux';


import { ReactComponent as Replies } from '../images/chat.svg';
import { ReactComponent as Heart } from '../images/heart.svg';
import { ReactComponent as ChevronUp } from '../images/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../images/chevron-down.svg';

import { ReactComponent as ThumbUp } from '../images/thumb-up.svg';
import { ReactComponent as ThumbDown } from '../images/thumb-down.svg';

import { ReactComponent as Edit } from '../images/pencil.svg';
import { ReactComponent as Delete } from '../images/trash.svg';

import { editPostComment, deletePostComment } from '../state/actions/index';

import { useForm } from 'react-hook-form';

import { useHistory } from 'react-router-dom';

import Profile from '../images/ws.jpg'

const SubCommentCard = ({
  comment,
  editPostComment,
  deletePostComment
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
    deletePostComment(comment.id);
    history.push(`/app`);
  };

  // Editing 

  const handleEdit = () => {
    // history.push(`/app/posts/${post.id}/edit`);
    setEditing(true)
  };

  const handleEditCancel = () => {
    setEditing(true)
  }

  const handleAddComment = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='ml-12'>
      <div className='overflow-hidden border-b border-gray-200 pt-4'>
        <div className="flex items-center px-4">

          {/* Profile image */}
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={Profile} alt="" />
          </div>
          {/* Name */}
          <div className="ml-3">
            <div className="text-base font-medium leading-6 text-gray-800">
              William Sulinski
        </div>
            {/* Username */}
            <div className="text-sm font-medium leading-5 text-gray-500">
              @wsul
        </div>
          </div>
        </div>

        {/* Post body */}
        <div className='my-4 ml-16'>
          {!editing ? (
            <p>
              {comment?.body}
            </p>
          ) : <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='post_comment' className='sr-only'>
                  Post
              </label>
                <div className='mt-1 sm:mt-0 sm:col-span-2'>
                  <div className='max-w-lg flex rounded-md shadow-sm'>
                    <textarea
                      name='header'
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
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded' onClick={handleEditCancel}>
                  Cancel
              </button>
              </form>
            </div>
          }
        </div>

        {/* Bottom / action panel */}
        <div className='flex my-4 ml-16 mx-4 justify-between'>

          {/* Comment and like sums */}
          <div className='flex'>
            {/* Replies panel */}
            <div className='flex items-center'>
              {/* Reply icon */}
              {/* <div>
                <Replies className="text-gray-500 h-5 w-5 "
                  onClick={handleAddComment}
                />
              </div>
            
              <div className='text-gray-500 text-sm ml-1'>
                {comment?.comments?.length}
              </div> */}
            </div>

            {/* Upvotes panel */}
            <div className='flex items-center ml-2'>
              {/* Vote icon */}
              <div className="flex">
                <Heart className="text-gray-500 h-5 w-5" />
              </div>
              {/* Vote count */}
              <div className='text-gray-500 text-sm ml-1'>
                {comment?.vote_count}
              </div>
            </div>
          </div>

          {/* Upvote, edit, delete */}
          <div className="flex">
            <div className='ml-2'>
              <ChevronUp onClick={console.log('upvote')} className="text-gray-500 h-5 w-5" />
            </div>
            <div className='ml-2'>
              <ChevronDown onClick={console.log('upvote')} className="text-gray-500 h-5 w-5" />
            </div>
            <div className='ml-2'>
              {comment?.updateable ? <Edit className="text-gray-500 h-5 w-5" onClick={handleEdit} /> : null}
            </div>
            <div className='ml-2'>
              {comment?.deleteable ? <Delete className="text-gray-500 h-5 w-5" onClick={handleDelete} /> : null}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default connect(null, { editPostComment, deletePostComment })(SubCommentCard);
