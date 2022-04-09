import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AssignSubjects = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.put('/api/assignment/assignSubjects')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full  '>
            <div className='font-bold text-3xl text-[#051730]'>The algorithm assigns students to the following teachers.</div>
            <table className="table table-zebra mx-auto w-11/12 ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Teacher Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(({ studentName, subject, teacherName }, index) =>
                            <tr key={index} >
                                <th className='font-medium'>{index + 1}</th>
                                <th className='font-medium capitalize'>{studentName}</th>
                                <th className='font-medium capitalize'>{subject}</th>
                                <th className='font-medium capitalize'>{teacherName}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AssignSubjects