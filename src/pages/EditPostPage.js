import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect, useSelector } from 'react-redux';
import { getPostByID, deletePost } from '../state/actions/index';
import { editPost } from '../state/actions/index'

// import CommentCard from '../components/CommentCard';
import { ReactComponent as IconArrowDown } from '../images/icon-arrow-down.svg';
import { ReactComponent as IconArrowUp } from '../images/icon-arrow-up.svg';
import { ReactComponent as IconComment } from '../images/icon-comment.svg';


const EditPostPage = ({ editPost, getPostByID }) => {
    const { id } = useParams();

    const post = useSelector(state => state.posts.data.find(post => post.id === Number(id)));

    console.log(post)
    const { register, handleSubmit, reset } = useForm({
        defaultValues: post
    });

    // let history = useHistory();

    useEffect(() => {
        getPostByID(id)
    }, []) // eslint-disable-line


    useEffect(() => {
        if (post) {
            reset(post)
        }
    }, [post])


    const handleEdit = () => {
        console.log('edit')
    }

    const handleCancel = () => {
        console.log('cancel')
    }

    const onSubmit = data => {
        editPost(data)
    }

    return (

        <div className="px-6 border-b border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* Original post */}
                <div className=" border-b border-gray-200">

                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                        <div className="max-w-lg flex rounded-md shadow-sm">
                            <textarea name="header" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Header" ref={register} ></textarea>
                        </div>
                    </div>

                    <div className="my-4">
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <div className="max-w-lg flex rounded-md shadow-sm">
                                <textarea name="body" rows="3" className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" placeholder="Body" ref={register}></textarea>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleCancel}>Cancel</button>
                    <button onClick={handleEdit}>Save</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getPostByID, editPost })(EditPostPage);