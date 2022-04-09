import React, { useState } from 'react'
import axios from 'axios'


const Home = () => {
    const [result, setResult] = useState({})
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [firstChoice, setFirstChoice] = useState("")
    const [secondChoice, setSecondChoice] = useState("")
    const [success, setSuccess] = useState(false)

    const addNewTeacher = async (e) => {
        e.preventDefault()
        setLoading(true)
        let teahcerData = {
            name,
            email,
            firstChoice,
            secondChoice
        }
        const { data } = await axios.post('/api/teacher/addTeacher', teahcerData)
        setLoading(false)
        setResult(data)
        setTimeout(() => {
            setSuccess(false)
        }, 2000);
        setSuccess(true)
    }

    return (
        <form onSubmit={(e) => { addNewTeacher(e) }} className='p-8 px-16 flex flex-col items-center gap-2 w-full h-full'>
            {success &&
                <div className="alert alert-success shadow-lg w-[30rem] ">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="strokeCurrent flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLnejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>The teacher has been successfully added!</span>
                    </div>
                </div>
            }
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-medium text-lg">Teacher Name</span>
                </label>
                <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="name" className="input input-bordered w-full max-w-xs" />

            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-medium text-lg">Email</span>
                </label>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="email address" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-medium text-lg">First Choice Subject</span>
                </label>
                <input type="text" value={firstChoice} onChange={(e) => { setFirstChoice(e.target.value) }} placeholder="subject name" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text font-medium text-lg">Second Choice Subject</span>
                </label>
                <input type="text" value={secondChoice} onChange={(e) => { setSecondChoice(e.target.value) }} placeholder="subject name" className="input input-bordered w-full max-w-xs" />
            </div>
            <button type='submit' className={loading ? "btn loading w-[20rem]" : "btn w-[20rem]"}>Add Teacher</button>

        </form>
    )
}

export default Home