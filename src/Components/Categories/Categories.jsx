import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("/categories.json").then(res => res.json())

const Categories = () => {
     const categories = use(categoriesPromise)

    return (
        <div>
            <h2 className='text-lg font-semibold'>Al Categories</h2>
            <div className='grid grid-cols-1 gap-1 mt-5'>
                {
                 categories.map(category => <NavLink key={category.id} to={`category/${category.id}`} className="p-2 bg-base-100 text-lg text-center text-gray-500 font-medium">{category.name}</NavLink>) 
                }
            </div>
        </div>
    );
};

export default Categories;