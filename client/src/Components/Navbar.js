import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between p-4 px-8 font-bold shadow-md'>
            <h1 className='text-xl'>Database</h1>
            <div className='flex items-center gap-2'>
                <button className='p-2 px-4 rounded-full text-white shadow font-bold bg-amber-300'>Add Student</button>
                <button className='p-2 px-4 rounded-full text-white shadow font-bold bg-sky-400'>Add Teacher</button>
            </div>
        </div>
    )
}

export default Navbar