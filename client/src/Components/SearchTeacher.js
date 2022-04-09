import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [students, setStudents] = useState([])
    const [search, setSearch] = useState('')

    const searchTeacher = async (e) => {
        e.preventDefault()
        const { data } = await axios.get(`/api/teacher/search/${search}`)
        setStudents(data)
    }
    return (
        <div className='p-8 px-16 text-left flex flex-col items-start gap-12 w-full h-full '>
            <div className='font-bold text-3xl text-[#051730]'>Search for a Teacher.</div>
            <form onSubmit={(e) => { searchTeacher(e) }} className='flex gap-3'>
                <input onChange={(e) => { setSearch(e.target.value) }} value={search} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                <button type='submit' className="btn btn-outline btn-primary">Search</button>
            </form>
            {students.length > 0 ?
                <table className="table table-zebra m-auto w-96 ">
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
                        {students.map(({ name, email, firstChoice, secondChoice }) =>
                            <tr>
                                <th></th>
                                <th>{name}</th>
                                <th>{email}</th>
                                <th>{firstChoice}</th>
                                <th>{secondChoice}</th>
                            </tr>
                        )}
                    </tbody>
                </table> :
                <div>There's no teacher named "{search}"</div>
            }
        </div>
    )
}

export default Home