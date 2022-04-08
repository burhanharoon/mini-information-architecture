import express from 'express'
import Student from '../models/studentModel.js'
const router = express.Router()

const sortDesending = object => Object.keys(object).sort(function (a, b) { return object[b] - object[a] })

router.get('/count', async (req, res) => {
    const students = await Student.find({})
    let subjects = {}
    students.forEach(student => {
        if (subjects.hasOwnProperty(student.subject)) {
            subjects[student.subject] += 1
        }
        else {
            subjects[student.subject] = 1
        }
    })

    res.send(subjects)
})

router.get('/popularSubjects', async (req, res) => {
    const students = await Student.find({})
    let subjects = {}
    students.forEach(student => {
        if (subjects.hasOwnProperty(student.subject)) {
            subjects[student.subject] += 1
        }
        else {
            subjects[student.subject] = 1
        }
    })
    let popularSubjects = sortDesending(subjects)
    res.send(popularSubjects.slice(0, 3))
})

router.get("/", (req, res) => {
    res.send("Sending Student Routes")
})

export default router