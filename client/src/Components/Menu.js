import React from 'react'
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='w-full p-6 bg-[#f2f2f2e6] text-left flex flex-col gap-2 h-full'>

            <Link to="/">
                <h1 className='text-3xl p-2  font-bold text-[#570df8]'>Database</h1>
            </Link>

            <div className='flex flex-col gap-0'>
                <p className='p-2 text-[#1f293766] text-xs'>Student</p>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium ' to="/">Show all students</Link>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium ' to="/countOfEachSubject">How many students are taking each subject</Link>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium ' to="/popularSubjects">Most Popular EE Subjects</Link>
                <Link className=' border-b border-[#1f29371a] p-2 text-sm text-[#1f2937] font-medium ' to="/poorGrades">Students having D or F Grade</Link>
            </div>

            <div className='flex flex-col gap-0'>
                <p className='p-2 text-[#1f293766] text-xs'>Teacher</p>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium' to="/leastFirstChoiceSubject">EE subjects with the fewest teachers as their 1st choice</Link>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium' to="/searchTeacher">Search for a Teacher</Link>
                <Link className='border-b border-[#1f29371a] p-2 text-sm text-[#1f2937] font-medium' to="/mathSecondSubject">Teachers who have selected Math as their 2nd choice</Link>
            </div>

            <div className='flex flex-col gap-0'>
                <p className='p-2 text-[#1f293766] text-xs'>Assignment</p>
                <Link className=' p-2 text-sm text-[#1f2937] font-medium' to="/assignSubjects">Assign teahcer to students</Link>
            </div>
        </div>
    )
}

export default Menu