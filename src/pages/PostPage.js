import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { connect, useSelector } from 'react-redux';
import { getPostByID, deletePost } from '../state/actions/index';

// import CommentCard from '../components/CommentCard';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const PostPage = ({ posts, getPostByID, deletePost }) => {

    let history = useHistory();

    const { id } = useParams();
    // const post = posts.data.find(post => post.id === Number(id))
    const post = useSelector(state => state.posts.data.find(post => post.id === Number(id)));

    useEffect(() => {
        getPostByID(id)
    }, [id, getPostByID])

    const handleDelete = () => {
        console.log(post.id)
        deletePost(post.id)
    }

    const handleEdit = () => {
        history.push(`/app/posts/${post.id}/edit`)
        // history.push(`/app`)
    }

    return (

        <div className="px-6 border-b border-gray-200">

            {/* Original post */}
            <div className=" border-b border-gray-200">
                <div className="my-4">
                    <p>Username: {post?.user_id} </p>
                </div>

                <div className="my-4">
                    <p>Header: {post?.header}</p>
                </div>

                <div className="my-4">
                    <p>Body: {post?.body}</p>
                </div>

                <div className="flex my-4">
                    {/* <p>{post.post_votes.post_vote_count}</p>  */}
                    <p><IconArrowUp onClick={() => console.log('test')} /></p>
                    <p><IconArrowDown onClick={() => console.log('test')} /></p>
                    {/* <p className="ml-6">{post.comments.length}</p> */}
                    <p><IconComment /></p>
                </div>
                <button onClick={handleDelete}>Delete</button>
                <button onClick={handleEdit}>Edit</button>
            </div>

            {/* Comments */}
            <div>
                {post?.comment && <p>This is a comment.</p>}
                {/* { post.comment.map(comment => <CommentCard comment={comment} key={comment.id} />) } */}
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        // posts: state.posts
    }
}

export default connect(mapStateToProps, { getPostByID, deletePost })(PostPage);