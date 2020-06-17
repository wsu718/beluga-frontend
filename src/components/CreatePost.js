import React from 'react';
import { useForm } from 'react-hook-form';

import { connect } from 'react-redux';
import { addPost } from '../state/actions'

const CreatePost = ({ addPost }) => {

    const { register, handleSubmit } = useForm();

    const onSubmit = post => {
        // console.log(post)
        addPost(post)
    }

    return (
        <div className="px-6 py-6 border-b border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="post" className="sr-only">Post
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                        <textarea name="header" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="What are you thinking about?" ref={register}></textarea>
                    </div>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">Post</button>
            </form>
        </div>
    );
}

export default connect(null, { addPost })(CreatePost);