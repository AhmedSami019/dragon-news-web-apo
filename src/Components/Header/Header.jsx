import React from 'react';
import Logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-3 mt-6'>
            <img classNam= "w-[300px]" src={Logo} alt="this is logo" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className='text-2xl font-medium'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;