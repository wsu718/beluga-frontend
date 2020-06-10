import React from 'react';

import CreatePost from './CreatePost.js';
import Feed from '../components/Feed';

const MainPage = ({ posts }) => {

    const handleClick = () => {
        console.log('worked')
    }

    return (
        <div>
            <CreatePost />
            <Feed posts={posts} handleClick={handleClick} />
        </div>
    )

};

export default MainPage;