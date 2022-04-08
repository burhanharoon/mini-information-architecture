import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='w-1/4 py-2 bg-neutral-100 text-left flex flex-col shadow-md gap-2'>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/">Show all students</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/countOfEachSubject">How many students are taking each subject</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/popularSubjects">Most Popular EE Subjects</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/poorGrades">Students having D or F Grade</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/leastFirstChoiceSubject">EE subjects with the fewest teachers as their 1st choice</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/searchTeacher">Search for a Teacher</Link>
            <Link className='p-2 hover:bg-gray-300 font-semibold' to="/mathSecondSubject">Teachers who have selected Math as their 2nd choice</Link>
        </div>
    )
}

export default Menu