import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import LandingTopNav from '../components/LandingTopNav';

import { connect } from 'react-redux';

import { registerAction } from '../state/actions/index';

const RegisterPage = ({ auth, registerAction }) => {

    let history = useHistory();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => registerAction(data);



    useEffect(() => {
        if (auth.isLoggedIn) {
            history.push('/login');
        }
    }, [auth.isLoggedIn, history])

    // console.log(auth.isLoading)
    // const password = useRef({});
    // password.current = watch("password", "");

    return (

        <div className="relative bg-white overflow-hidden">
            {/* Inside container */}
            <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                <LandingTopNav />

                {/* Primary page content; hero block */}
                <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 ">
                        <h2 className="mt-1 text-4xl tracking-tight leading-10 font-extrabold text-indigo-600 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                            Register
                    </h2>

                        <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center">

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-5 text-gray-700">
                                        Email address
                            </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="email" type="email" name="email" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" ref={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                message: "That appears to be an invalid email address."
                                            }
                                        })} />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="password" className="block text-sm font-medium leading-5 text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="password" type="password" name="password" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" ref={register({
                                            required: "You must specify a password.",
                                            minLength: {
                                                value: 8,
                                                message: "Password must have at least 8 characters."
                                            }
                                        })} />
                                        {errors.password && <p>{errors.password.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="username" className="block text-sm font-medium leading-5 text-gray-700">
                                        Username
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="username" name="username" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" ref={register({
                                            required: "You must specify a username."
                                        })} />
                                        {errors.username && <p>{errors.username.message}</p>}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="name" className="block text-sm font-medium leading-5 text-gray-700">
                                        Name
                                    </label>
                                    <div className="mt-1 rounded-md shadow-sm">
                                        <input id="name" name="name" required className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5" ref={register({
                                            required: "You must specify a name."
                                        })} />
                                        {errors.name && <p>{errors.name.message}</p>}
                                    </div>
                                </div>

                                <button type="submit" className="mt-6 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                                    Register
                        </button>
                            </form>

                            <p className="mt-3 text-sm leading-5 text-gray-500">
                                We care about the protection of your data. Read our
                                <Link to="/" className="font-medium text-gray-900 underline ml-1">
                                    Privacy Policy
                                </Link>.
                    </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <div className="flex flex-col">
        //     <p className="text-5xl">Register</p>
        //     <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">

        //         <label>Email</label>
        //         <input
        //             type="email"
        //             placeholder="Email"
        //             name="email"
        //             ref={register({
        //                 required: "Required",
        //                 pattern: {
        //                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        //                     message: "That appears to be an invalid email address."
        //                 }
        //             })} />
        //         {errors.email && <p>{errors.email.message}</p>}

        //         <label>Password</label>
        //         <input
        //             type="password"
        //             placeholder="Password"
        //             name="password"
        //             ref={register({
        //                 required: "You must specify a password.",
        //                 minLength: {
        //                     value: 8,
        //                     message: "Password must have at least 8 characters."
        //                 }
        //             })} />
        //         {errors.password && <p>{errors.password.message}</p>}

        //         <label>Username</label>
        //         <input
        //             placeholder="Username"
        //             name="user_name"
        //             ref={register({
        //                 required: "You must specify a username."
        //             })} />
        //         {errors.user_name && <p>{errors.user_name.message}</p>}

        //         <label>Name</label>
        //         <input
        //             placeholder="Name"
        //             name="name"
        //             ref={register({
        //                 required: "Required"
        //             })} />
        //         {errors.name && <p>{errors.name.message}</p>}

        //         <input type="submit" />
        //     </form>
        // </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { registerAction })(RegisterPage);