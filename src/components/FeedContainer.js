import React from 'react';
import CreatePost from '../components/CreatePost.js';
import Feed from '../components/Feed';

export const FeedContainer = () => {
    return (
        <div>
            <CreatePost />
            <Feed />
        </div>
    )
}