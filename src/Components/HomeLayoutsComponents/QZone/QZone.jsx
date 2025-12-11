import React from 'react';
import swimmingImg from "../../../assets/swimming.png"
import classImg from "../../../assets/class.png"
import PlayGroundImg from "../../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-5 rounded-lg'>
            <h2 className="text-lg font-semibold mb-5">Q-Zone</h2>
            <div className='space-y-5'>
                <img className='w-full' src={swimmingImg} alt="" />
                <img className='w-full' src={classImg} alt="" />
                <img className='w-full' src={PlayGroundImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;