import React from 'react';
import PostCard from './PostCard';

const Feed = ({ posts, dispatch }) => {
    // console.log(posts)
    return (
        <div className="pt-4">
            {posts.map(post => (
                <PostCard post={post} key={post.id} dispatch={dispatch} posts={posts} />
            ))}
        </div>
    )
}

export default Feed;