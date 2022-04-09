import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.get('/api/student/allStudents')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16  flex flex-col items-start gap-12 w-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of all Students.</div>

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
                                <th className='font-medium'>{name}</th>
                                <th className='font-medium'>{email}</th>
                                <th className='font-medium capitalize'>{subject}</th>
                                <th className='font-medium'>{grade}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home