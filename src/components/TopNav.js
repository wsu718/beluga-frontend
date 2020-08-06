import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DesktopDropDownMenu from '../components/DesktopDropDownMenu';
import MobileDropDownMenu from '../components/MobileDropDownMenu';
import { MobileMenuButton } from '../components/MobileMenuButton';


import Logo from '../images/whale-5.svg';
// import Profile from '../images/ws.jpg';

const TopNav = () => {

    const [dropDownOpen, setDropDownOpen] = useState(false);

    const toggleDropDown = () => {
        console.log('toggle')
        setDropDownOpen(!dropDownOpen)
    }


    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">

                        {/* TopNav - Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <NavLink to="/app">
                                <img className="block h-8 w-auto" src={Logo} alt="Logo" />
                            </NavLink>
                        </div>


                        {/* TopNav - Desktop - Primary NavLinks */}
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex">
                            <NavLink to="/app" className="inline-flex items-center px-1 pt-1 border-b-2 border-indigo-500 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out">
                                Feed
                            </NavLink>
                            {/* <NavLink to="/app" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out">
                                Groups
                        </NavLink> */}
                        </div>
                    </div>

                    {/* TopNav - Desktop - Settings */}
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">

                        {/* Add back when we have notifications */}
                        {/* <NotificationsButton /> */}

                        {/* <!-- Profile dropdown --> */}
                        <div className="ml-3 relative">
                            <div>
                                <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true" onClick={toggleDropDown}>
                                    <div>
                                        <div className="text-sm font-medium leading-5 text-gray-500">
                                            @wsul
                                    </div>
                                    </div>
                                    {/* Circular avatar image */}
                                    {/* <img className="h-8 w-8 rounded-full" src={Profile} alt="" /> */}
                                </button>
                            </div>

                            {/* DropDownMenu: shows when button is clicked */}
                            {dropDownOpen ? <DesktopDropDownMenu /> : <></>}
                        </div>
                    </div>

                    {/* TopNav - Mobile - MenuButton */}
                    <MobileMenuButton toggleDropDown={toggleDropDown} dropDownOpen={dropDownOpen} />

                </div>
            </div>

            {/* TopNav - Mobile DropDownMenu */}
            <MobileDropDownMenu dropDownOpen={dropDownOpen} />
        </nav>
    )
}

export default TopNav;