import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.get('/api/student/count')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    console.log(students);

    return (
        <div className='p-8 px-16  flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of all subjects taken by students.</div>

            <div className=" flex justify-center items-center w-full">
                <table className="table table-zebra w-96 ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Subject</th>
                            <th># of Students taking it</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Object.entries(students).map(([key, value], index) =>
                                <tr key={index} >
                                    <th className='font-medium'>{index + 1}</th>
                                    <th className='font-medium capitalize'>{key}</th>
                                    <th className='font-medium'>{value}</th>
                                </tr>
                            )
                        }
                        {/* {students.map(({ subject, grade }, index) =>
                            <tr key={_id} className="">
                                <th className='font-medium'>{index + 1}</th>
                                <th className='font-medium'>{name}</th>
                                <th className='font-medium'>{email}</th>
                                <th className='font-medium capitalize'>{subject}</th>
                                <th className='font-medium'>{grade}</th>
                            </tr>
                        )} */}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home