import React, { useEffect } from 'react';
import PostCard from './PostCard';

import { connect } from 'react-redux';
import { getPosts } from '../state/actions'

const Feed = ({ posts, getPosts }) => {

    useEffect(() => {
        getPosts();
    }, [getPosts]);

    return (
        <div>
            {posts.map(post => (
                <PostCard post={post} key={post.id} />
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts.data
    }
}

export default connect(mapStateToProps, { getPosts })(Feed);