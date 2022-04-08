import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const getStudents = async () => {
        const { data } = await axios.get('/api/teacher/mathSecondSubject')
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of Teachers who have selected Math as their 2nd Choice.</div>
            <table className="table table-zebra m-auto w-96 ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Teacher Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((teacherName, index) =>
                            <tr key={index} >
                                <th className='font-medium'>{index + 1}</th>
                                <th className='font-medium capitalize'>{teacherName}</th>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home