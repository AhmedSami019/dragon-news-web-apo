import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto my-5'>
            <Navbar></Navbar>
            {/* this is dynamic children loader section */}
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default AuthLayout;