import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { connect } from 'react-redux';
import { getPostByID } from '../state/actions/index';

// import CommentCard from '../components/CommentCard';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';

const PostPage = ({ posts, getPostByID }) => {
    const { id } = useParams();
    const post = posts.data.find(post => post.id === Number(id))

    useEffect(() => {
        getPostByID(id)
    }, [id, getPostByID])

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
        posts: state.posts
    }
}

export default connect(mapStateToProps, { getPostByID })(PostPage);