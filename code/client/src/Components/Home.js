import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    const getStudents = async () => {
        const { data } = await axios.get('/api/student/allStudents')
        setLoading(false)
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16  flex flex-col items-start gap-12 w-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of all Students.</div>

            {loading ?
                <div class="flex items-center w-full justify-center h-80 space-x-2">
                    <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <div className="w-full">
                    <table className="table table-zebra w-full ">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Subject</th>
                                <th>Grade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map(({ _id, name, email, subject, grade }, index) =>
                                <tr key={_id} className="">
                                    <th className='font-medium'>{index + 1}</th>
                                    <th className='font-medium capitalize'>{name}</th>
                                    <th className='font-medium'>{email}</th>
                                    <th className='font-medium capitalize'>{subject}</th>
                                    <th className='font-medium capitalize'>{grade}</th>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>}
        </div>
    )
}

export default Home