import React from 'react';

import CreatePost from '../components/CreatePost.js';
import Feed from '../components/Feed';
import TopNav from '../components/TopNav';


const AppPage = () => {



    return (
        <div>
            <TopNav />
            <CreatePost />
            <Feed />
        </div>
    )

};



export default AppPage;