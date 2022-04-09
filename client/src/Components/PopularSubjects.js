import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    const getStudents = async () => {
        const { data } = await axios.get('/api/student/popularSubjects')
        setLoading(false)
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])

    console.log(students);

    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of all subjects taken by students.</div>
            <div>
                <div className='text-xl'>Based on number of students,</div>
                <div className='text-3xl font-semibold'>Here're the top three EE Subjects</div>
            </div>
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
                            <th>Ranking</th>
                            <th>Subject</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) =>
                            <tr key={index} className="">
                                <th className='font-medium'>{index + 1}</th>
                                <th className='font-medium capitalize'>{student}</th>
                            </tr>
                        )
                        }
                    </tbody>
                </table>}
        </div>
    )
}

export default Home