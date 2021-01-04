import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { logout } from '../state/actions';

const DesktopDropDownMenu = ({ logout }) => {
  return (
    <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg'>
      <div className='py-1 rounded-md bg-white shadow-xs'>
        <NavLink
          to='/'
          className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
        >
          Settings
        </NavLink>
        <NavLink
          to='/'
          className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out'
          onClick={() => logout()}
        >
          Sign out
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.data,
  };
};

export default connect(mapStateToProps, { logout })(DesktopDropDownMenu);
