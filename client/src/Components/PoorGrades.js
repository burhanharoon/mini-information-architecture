import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    const getStudents = async () => {
        const { data } = await axios.get('/api/student/poorGrades')
        setLoading(false)
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of students having D or F grade.</div>
            {loading ?
                <div class="flex items-center w-full justify-center h-80 space-x-2">
                    <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <table className="table table-zebra mx-auto w-96 ">
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
            }
        </div>
    )
}

export default Home