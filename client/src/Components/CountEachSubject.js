import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const [loading, setLoading] = useState(true)

    const getStudents = async () => {
        const { data } = await axios.get('/api/student/count')
        setLoading(false)
        setStudents(data)
    }
    useEffect(() => {
        getStudents()
    }, [])


    return (
        <div className='p-8 px-16  flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Here's the list of all subjects taken by students.</div>

            {loading ?
                <div class="flex items-center w-full justify-center h-80 space-x-2">
                    <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
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
                        </tbody>
                    </table>
                </div>
            }
        </div>
    )
}

export default Home