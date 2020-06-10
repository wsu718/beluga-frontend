import React from 'react';
import PostCard from './PostCard';

const Feed = ({ posts, handleClick }) => {
    return (
        <div className="pt-4">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} handleClick={handleClick} />
            ))}

        </div>
    )
}

export default Feed;