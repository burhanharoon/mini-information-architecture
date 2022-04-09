import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AssignSubjects = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    const getStudents = async () => {
        const { data } = await axios.put('/api/assignment/assignSubjects')
        setLoading(false)
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full  '>
            <div className='font-bold text-3xl text-[#051730]'>The algorithm assigns students to the following teachers.</div>
            {loading ?
                <div class="flex items-center w-full justify-center h-80 space-x-2">
                    <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
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
            }
        </div>
    )
}

export default AssignSubjects