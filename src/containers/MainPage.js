import React from 'react';

import CreatePost from './CreatePost.js';
import Feed from '../components/Feed';

const MainPage = ({ posts }) => {

    return (
        <div>
            <CreatePost />
            <Feed posts={posts} />
        </div>
    )

};

export default MainPage;