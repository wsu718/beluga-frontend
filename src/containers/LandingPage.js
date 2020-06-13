import React from 'react';
import { Link } from 'react-router-dom';

// import Logo from '../images/logo.svg';
// import Whale1 from '../images/whale-1.svg'
// import Whale2 from '../images/whale-2.svg'
// import Whale3 from '../images/whale-3.svg'
import Whale4 from '../images/whale-4.svg'
// import Whale5 from '../images/whale-5.svg'


const LandingPage = () => {

    const handleSubmit = e => {
        e.preventDefault();
    }

    return (

        <div className="relative bg-white overflow-hidden">
            {/* Inside container */}
            <div className="relative pt-6 pb-16 md:pb-20 lg:pb-24 xl:pb-32">

                {/* Navbar */}
                <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
                    <div className="flex items-center flex-1">
                        <div className="flex items-center justify-between w-full md:w-auto md:mx-auto">

                            {/* Logo */}
                            <p className="md:mx-auto">
                                <img className="h-14 w-auto sm:h-14 md:mx-auto" src={Whale4} alt="Beluga" />
                            </p>

                        </div>


                    </div>
                </nav>



                {/* Primary page content; hero block */}
                <div className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 ">

                        <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                            Coming soon
                        </div>

                        <h2 className="my-4 text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:leading-none sm:text-6xl lg:text-5xl xl:text-6xl">
                            Beluga: a place for
                            <br />
                            <span className="text-indigo-600">
                                thoughtful discourse.
                            </span>
                        </h2>

                        {/* Subtext */}
                        <p className="mt-6 text-base text-gray-500 sm:mt-10 sm:text-xl lg:text-lg xl:text-xl">
                            Our relationships are what make us who we are. But too often, technology amplifies the worst parts of us. We want to fix online conversation.
                        </p>

                        <p className="mt-6 text-base text-gray-500 sm:mt-10 sm:text-xl lg:text-lg xl:text-xl">Beluga is a way to connect with smart, supportive people, to learn new things, and share wisdom. It is a place that connects us, and bring us closer together.
                        </p>

                        {/* Email capture box */}
                        <div className="mt-5 sm:max-w-lg sm:mx-auto sm:text-center sm:mt-10">
                            <p className="text-base font-medium text-gray-900">
                                We'll let you know when we're ready!
                            </p>

                            <form onSubmit={handleSubmit} className="mt-3 sm:flex">
                                <input aria-label="Email" className="appearance-none block w-full px-3 py-3 border border-gray-300 text-base leading-6 rounded-md placeholder-gray-500 shadow-sm focus:outline-none focus:placeholder-gray-400 focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:flex-1" placeholder="Enter your email" />

                                <button type="submit" className="mt-3 w-full px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:shadow-outline active:bg-gray-900 transition duration-150 ease-in-out sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto">
                                    Notify me
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
    )
};

export default LandingPage;