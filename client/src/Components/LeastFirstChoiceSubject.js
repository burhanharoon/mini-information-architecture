import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.get('/api/teacher/leastFirstChoiceSubject')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of subjects with the fewest teachers as their 1st Choice.</div>
            <table className="table table-zebra mx-auto w-96 ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Subject Name</th>
                        <th># of Teacher's having as 1st Choice</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.entries(students).map(([key, value], index) =>
                            <tr key={index} >
                                <th className='font-medium'>{index + 1}</th>
                                <th className='font-medium capitalize'>{key}</th>
                                <th className='font-medium text-center'>{value}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home