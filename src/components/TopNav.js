import React from 'react';
import { useHistory } from 'react-router-dom';

const TopNav = () => {

    let history = useHistory();

    const logout = () => {
        console.log('logout')
        // sessionStorage.removeItem('token');
        // history.push('/');
    }

    return (
        <div className="flex justify-end">
            <button onClick={logout} >Log out</button>
        </div>

    )
}

export default TopNav;