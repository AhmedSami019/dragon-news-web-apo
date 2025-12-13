import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import AuthContext from '../../Providers/AuthProvider/AuthContext';


const Navbar = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='flex justify-between items-center'>
            <div>{user && user.email}</div>
            <div className='flex gap-5 text-gray-500'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='flex items-center gap-5'>
                <img src={userIcon} alt="" />
                <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;