import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Home = () => {
    const [teachers, setTeachers] = useState([])
    const [search, setSearch] = useState('')
    const [result, setResult] = useState([])

    const searchTeacher = (e) => {
        emptyResults()
        teachers.forEach(teacher => {
            if (teacher.name.includes(search.trim())) {
                setResult(result => [...result, teacher])
            }
        })
    }
    const emptyResults = () => setResult([])

    const getTeachers = async () => {
        const { data } = await axios.get('/api/teacher/allTeachers')
        setTeachers(data)
    }

    useEffect(() => {
        getTeachers()
    }, [])

    useEffect(() => {
        if (search) searchTeacher()
        else emptyResults()
    }, [search])


    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Search for a Teacher.</div>
            <form className='flex gap-3 w-full'>
                <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="teacher name" className="input input-bordered input-primary w-full rounded-xl " />
            </form>
            {result.length > 0 &&
                <table className="table table-zebra mx-auto w-96 ">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>First Choice</th>
                            <th>Second Choice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result?.map(({ _id, name, email, firstChoice, secondChoice }) =>
                            <tr key={_id}>
                                <th></th>
                                <th className='capitalize'>{name}</th>
                                <th>{email}</th>
                                <th className='capitalize'>{firstChoice}</th>
                                <th className='capitalize'>{secondChoice}</th>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Home