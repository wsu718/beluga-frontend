import React from 'react';
import { Switch, Route } from 'react-router-dom'
import TopNav from '../components/TopNav';

import { FeedContainer } from './FeedContainer'

import PostPage from './PostPage';
import EditPostPage from './EditPostPage'


const Dashboard = () => {

    return (
        <div className="min-h-screen bg-white">
            <TopNav />
            <div className="py-10">
                <main>
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="px-4 py-2 sm:px-0">
                            <Switch>
                                <Route exact path="/app/posts/:id/edit">
                                    <EditPostPage />
                                </Route>
                                <Route exact path="/app/posts/:id">
                                    <PostPage />
                                </Route>
                                <Route path="/app/">
                                    <FeedContainer />
                                </Route>
                            </Switch>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )

};



export default Dashboard;