import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.get('/api/student/poorGrades')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of students having D or F grade.</div>
            <table className="table table-zebra m-auto w-96 ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Student Name</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(({ name, grade }, index) =>
                        <tr key={index} className="">
                            <th className='font-medium'>{index + 1}</th>
                            <th className='font-medium capitalize'>{name}</th>
                            <th className='font-medium capitalize'>{grade}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home