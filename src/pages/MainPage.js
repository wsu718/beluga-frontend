import React from 'react';

import CreatePost from '../components/CreatePost.js';
import Feed from '../components/Feed';

const MainPage = ({ posts, dispatch }) => {

    return (
        <div>
            <CreatePost />
            <Feed posts={posts} dispatch={dispatch} />
        </div>
    )

};

export default MainPage;