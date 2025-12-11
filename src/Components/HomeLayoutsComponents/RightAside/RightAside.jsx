import React from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';
import FindOnUs from '../FindOnUs/FindOnUs';

const RightAside = () => {
    return (
        <div className='space-y-10'>
            <SocialLogin/>
            <FindOnUs/>
        </div>
    );
};

export default RightAside;