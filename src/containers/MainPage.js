import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';


export const MainPage = ({ posts }) => {

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

export const CreatePost = () => {

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <div className="px-6 py-6 border-b border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="post" className="sr-only">Post
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                        <textarea name="post" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="What are you thinking about?" ref={register}></textarea>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Post</button>
            </form>
        </div>
    );
}

export const Feed = ({ posts, handleClick }) => {
    return (
        <div className="pt-4">
            {posts.map((post) => (
                <PostCard post={post} key={post.id} handleClick={handleClick} />
            ))}

        </div>
    )
}

export const PostCard = ({ post, handleClick }) => {
    return (
        <div className="px-6 border-b border-gray-200">

            <div className="my-4">
                <p>{post.user_name}</p>
            </div>

            <div className="my-4">
                <p><Link to={`/posts/${post.id}`}>{post.header}</Link></p>
            </div>

            <div className="flex my-4">
                <p>{post.post_votes.post_vote_count}</p>
                <p><IconArrowUp onClick={() => handleClick()} /></p>
                <p><IconArrowDown onClick={() => handleClick()} /></p>
                <p className="ml-6">{post.comments.length}</p>
                <p><IconComment /></p>
            </div>
        </div>
    )
}

export const ViewPost = ({ posts, handleClick }) => {

    const { id } = useParams();

    const post = posts.find(post => post.id === Number(id))

    console.log(post)

    return (
        <div className="px-6 border-b border-gray-200">

            {/* Original post */}
            <div className=" border-b border-gray-200">
                <div className="my-4">
                    <p>{post.user_name}</p>
                </div>

                <div className="my-4">
                    <p>{post.header}</p>
                </div>

                <div className="flex my-4">
                    <p>{post.post_votes.post_vote_count}</p>
                    <p><IconArrowUp onClick={() => handleClick()} /></p>
                    <p><IconArrowDown onClick={() => handleClick()} /></p>
                    <p className="ml-6">{post.comments.length}</p>
                    <p><IconComment /></p>
                </div>
            </div>

            {/* Comments */}
            <div>
                {post.comments.map(comment => <CommentCard comment={comment} key={comment.id} />)}
            </div>

        </div>
    )
}

export const CommentCard = ({ comment, handleClick }) => {
    return (
        <div className="border-b border-gray-200">

            <div className="my-4">
                <p>{comment.commenter_user_name}</p>
            </div>

            <div className="my-4">
                <p>{comment.body}</p>
            </div>

            <div className="flex my-4">
                <p>{comment.comment_vote_count}</p>
                <p><IconArrowUp onClick={() => handleClick()} /></p>
                <p><IconArrowDown onClick={() => handleClick()} /></p>
                <p className="ml-6">{comment.comments.length}</p>
                <p><IconComment /></p>
            </div>
        </div>
    )
}