import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex items-center justify-end p-4 px-8 font-bold shadow-md'>
            <div className='flex items-center gap-2'>
                <Link to="/addStudent">
                    <button className='p-2 px-4 rounded-full text-white shadow font-bold bg-amber-300'>Add Student</button>
                </Link>
                <Link to="/addTeacher">
                    <button className='p-2 px-4 rounded-full text-white shadow font-bold bg-sky-400'>Add Teacher</button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar