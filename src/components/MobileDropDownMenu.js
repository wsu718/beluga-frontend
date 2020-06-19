import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../images/ws.jpg'

const MobileDropDownMenu = ({ dropDownOpen }) => {
    return (
        <div className={`${dropDownOpen ? 'block' : 'hidden'} sm:hidden`} >
            <div className="pt-2 pb-3">
                <NavLink to="/app" className="block pl-3 pr-4 py-2 border-l-4 border-indigo-500 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out">
                    Feed
                        </NavLink>
                <NavLink to="/app" className="mt-1 block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out">
                    Groups
                         </NavLink>
            </div>

            <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-4">
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src={Profile} alt="" />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium leading-6 text-gray-800">
                            William Sulinski
                                </div>
                        <div className="text-sm font-medium leading-5 text-gray-500">
                            @wsul
                                </div>
                    </div>
                </div>

                <div className="mt-3" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">

                    <NavLink to="/" className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                        Settings
                            </NavLink>

                    <NavLink to="/" className="mt-1 block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100 focus:outline-none focus:text-gray-800 focus:bg-gray-100 transition duration-150 ease-in-out" role="menuitem">
                        Sign out
                            </NavLink>

                </div>
            </div>
        </div>
    )
}

export default MobileDropDownMenu;