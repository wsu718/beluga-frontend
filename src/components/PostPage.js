import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect, useSelector } from 'react-redux';
import { getPostByID, deletePost, postVote, editPost } from '../state/actions/index';

import CommentCard from '../components/CommentCard';
// import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
// import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
// import { ReactComponent as IconComment } from '../images/icon-comment.svg';
import CreatePostComment from '../components/CreatePostComment';

import { ReactComponent as Replies } from '../images/chat.svg';
import { ReactComponent as Heart } from '../images/heart.svg';
import { ReactComponent as ChevronUp } from '../images/chevron-up.svg';
import { ReactComponent as ChevronDown } from '../images/chevron-down.svg';

// import { ReactComponent as ThumbUp } from '../images/thumb-up.svg';
// import { ReactComponent as ThumbDown } from '../images/thumb-down.svg';

import { ReactComponent as Edit } from '../images/pencil.svg';
import { ReactComponent as Delete } from '../images/trash.svg';

import { useForm } from 'react-hook-form';


import Profile from '../images/ws.jpg'

// import PostCard from '../components/PostCard';

const PostPage = ({ posts, getPostByID, deletePost, postVote, editPost }) => {
  let history = useHistory();

  // conditional for showing the comment form
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState(false);

  const { register, handleSubmit } = useForm();

  const { id } = useParams();
  // const post = posts.data.find(post => post.id === Number(id))
  // find the exact post from refreshed state
  const post = useSelector((state) =>
    state.posts.data.find((post) => post.id === Number(id))
  );

  useEffect(() => {
    getPostByID(id);
  }, [id, getPostByID]);

  // Deleting 

  const handleDelete = () => {
    deletePost(id);
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

  const onSubmit = (data) => {
    console.log(data)
    console.log(post.id)
    setEditing(false);
    editPost(post.id, data);
  };

  // Voting

  const handleUpvote = () => {
    postVote(id, { up_vote: true });
  };

  const handleDownvote = () => {
    postVote(id, { down_vote: true });
  };

  // Commenting

  const handleAddComment = () => {
    setShowForm(!showForm)
  }

  // This code repeats a lot of what is in PostCard; can probably make a reusable Component.


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
            {post?.header}
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
                    defaultValue={post.header}
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
            <div>
              <Replies className="text-gray-500 h-5 w-5 "
                onClick={handleAddComment}
              />
            </div>
            {/* Reply count */}
            <div className='text-gray-500 text-sm ml-1'>
              {post?.comments?.length}
            </div>
          </div>

          {/* Upvotes panel */}
          <div className='flex items-center ml-2'>
            {/* Vote icon */}
            <div className="flex">
              <Heart className="text-gray-500 h-5 w-5" />
            </div>
            {/* Vote count */}
            <div className='text-gray-500 text-sm ml-1'>
              {post?.vote_count}
            </div>
          </div>
        </div>

        {/* Upvote, edit, delete */}
        <div className="flex">
          <div className='ml-2'>
            <ChevronUp onClick={handleUpvote} className="text-gray-500 h-5 w-5" />
          </div>
          <div className='ml-2'>
            <ChevronDown onClick={handleDownvote} className="text-gray-500 h-5 w-5" />
          </div>
          <div className='ml-2'>
            {post?.updateable ? <Edit className="text-gray-500 h-5 w-5" onClick={handleEdit} /> : null}
          </div>
          <div className='ml-2'>
            {post?.deleteable ? <Delete className="text-gray-500 h-5 w-5" onClick={handleDelete} /> : null}
          </div>
        </div>

      </div>

      {/* {showForm ? (
        <CreatePostComment post_id={post.id}
          setShowForm={setShowForm}
        />
      ) : null} */}




      {/* Comments */}
      <div>
        {post?.comments &&
          post.comments.map((comment) => (
            <CommentCard setShowForm={setShowForm} comment={comment} key={comment.id} />
          ))}
        {}
      </div>

      <CreatePostComment post_id={id} />

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // posts: state.posts
  };
};

export default connect(mapStateToProps, {
  getPostByID,
  deletePost,
  postVote,
  editPost,
})(PostPage);
