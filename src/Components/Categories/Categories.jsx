import React, { use } from 'react';
import { NavLink } from 'react-router';
const categoriesPromise = fetch("categories.json").then(res => res.json())

const Categories = () => {
    const categories = use(categoriesPromise)
    categories.map(cat => console.log(cat))
    return (
        <div>
            <h2 className='text-lg font-semibold'>All Categories</h2>
            <div className='flex flex-col mt-5 text-lg font-medium gap-2'>
            {
                categories.map(category => <NavLink className={" p-3 bg-base-300"} key={category.id}>{category.name}</NavLink>)
            }
            </div>
        </div>
    );
};

export default Categories;