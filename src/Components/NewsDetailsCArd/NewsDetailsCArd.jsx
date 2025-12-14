import React from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCArd = ({news}) => {

    const { category_id, title, thumbnail_url, details} = news

    return (
        <div className='my-5 space-y-4 p-5 bg-base-200 rounded-2xl'>
            <img className='w-full rounded-lg' src={thumbnail_url} alt="" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='text-lg font'>{details}</p>
            <Link className='btn btn-secondary' to={`/category/${category_id}`} ><FaArrowCircleLeft/> Back to category</Link>
        </div>
    );
};

export default NewsDetailsCArd;