import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import MobileMenu from '../components/LandingMobileMenu'

import Whale5 from '../images/whale-5.svg'


const LandingTopNav = () => {

    const [isMobileMenu, setIsMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenu(!isMobileMenu)
    }

    // const handleSubmit = e => {
    //     e.preventDefault();
    // }

    return (
        <div>
            {/* Navbar */}
            <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6">
                <div className="flex items-center flex-1">
                    <div className="flex items-center justify-between w-full md:w-auto">

                        {/* Logo */}
                        <NavLink to='/'>
                            <img className="h-10 w-auto sm:h-10" src={Whale5} alt="Beluga" />
                        </NavLink>

                        {/* Hamburger button, only vis on mobile */}
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out" onClick={() => toggleMobileMenu()}>
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Navbar links, only visible on desktop */}
                    <div className="hidden md:block md:ml-20">
                        <NavLink to='/' className="font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            Our Manifesto
                            </NavLink>
                        <NavLink to='/' className="ml-10 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out">
                            About Us
                            </NavLink>
                    </div>
                </div>

                {/* Log in button, only visible on desktop */}
                <div className="hidden md:block text-right">
                    <span className="inline-flex rounded-md shadow-md">
                        <span className="inline-flex rounded-md shadow-xs">
                            <NavLink to='/login' className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                Log in
                                </NavLink>
                        </span>
                    </span>
                </div>

            </nav>

            {/* Show MobileMenu when hamburger icon is clicked */}
            {isMobileMenu ? <MobileMenu toggleMobileMenu={toggleMobileMenu} /> : <></>}
        </div>
    )
};

export default LandingTopNav;