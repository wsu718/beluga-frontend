import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect, useSelector } from 'react-redux';
import { getPostByID } from '../state/actions/index';
import { editPost } from '../state/actions/index'

// import CommentCard from '../components/CommentCard';


const EditPostPage = ({ editPost, getPostByID }) => {
    const { id } = useParams();

    const post = useSelector(state => state.posts.data.find(post => post.id === Number(id)));

    const { register, handleSubmit, reset } = useForm({
        defaultValues: post
    });

    let history = useHistory();

    useEffect(() => {
        getPostByID(id)
    }, [id, getPostByID])


    useEffect(() => {
        if (post) {
            reset(post)
        }
    }, [post, reset])

    const handleCancel = () => {
        history.goBack()
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
                    <button type="submit" >Save</button>
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