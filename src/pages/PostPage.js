import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect, useSelector } from 'react-redux';
import { getPostByID, deletePost } from '../state/actions/index';

import CommentCard from '../components/CommentCard';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';
import CreatePostComment from '../components/CreatePostComment';

const PostPage = ({ posts, getPostByID, deletePost }) => {
  let history = useHistory();

  const { id } = useParams();
  // const post = posts.data.find(post => post.id === Number(id))
  // find the exact post from refreshed state
  const post = useSelector((state) =>
    state.posts.data.find((post) => post.id === Number(id))
  );
  console.log(post);
  useEffect(() => {
    getPostByID(id);
  }, [id, getPostByID]);

  const handleDelete = () => {
    console.log(id);
    deletePost(id);
    history.push(`/app`);
  };

  const handleEdit = () => {
    history.push(`/app/posts/${post.id}/edit`);
  };

  return (
    <div className='px-6 border-b border-gray-200'>
      {/* Original post */}
      <div className=' border-b border-gray-200'>
        <div className='my-4'>
          <p>Username: {post?.user_id} </p>
        </div>

        <div className='my-4'>
          <p>Header: {post?.header}</p>
        </div>

        <div className='my-4'>
          <p>Body: {post?.body}</p>
        </div>

        <div className='flex my-4'>
          <p>{post?.vote_count}</p>
          <p>
            <IconArrowUp onClick={() => console.log('test')} />
          </p>
          <p>
            <IconArrowDown onClick={() => console.log('test')} />
          </p>
          <p className='ml-6'>{post?.comments?.length}</p>
          <p>
            <IconComment />
          </p>
        </div>
        {post?.updatable ? <button onClick={handleEdit}>Edit</button> : null}
        {post?.deleteable ? (
          <button onClick={handleDelete}>Delete</button>
        ) : null}
      </div>

      {/* Comments */}
      <div>
        {post?.comments &&
          post.comments.map((comment) => (
            <CommentCard comment={comment} key={comment.id} />
          ))}
        {}
      </div>
      {/* Comment on a post */}
      <div>
        <CreatePostComment post_id={post?.id} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // posts: state.posts
  };
};

export default connect(mapStateToProps, { getPostByID, deletePost })(PostPage);
