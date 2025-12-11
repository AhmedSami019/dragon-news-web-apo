import React from 'react';
import SocialLogin from '../../SocialLogin/SocialLogin';
import FindOnUs from '../FindOnUs/FindOnUs';
import QZone from '../QZone/QZone';

const RightAside = () => {
    return (
        <div className='space-y-10'>
            <SocialLogin/>
            <FindOnUs/>
            <QZone/>
        </div>
    );
};

export default RightAside;