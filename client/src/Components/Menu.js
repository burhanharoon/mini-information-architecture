import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='w-1/4 py-2 bg-neutral-100 text-left flex flex-col shadow-md gap-2'>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/">Show all students</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/countOfEachSubject">How many students are taking each subject</Link>
        </div>
    )
}

export default Menu