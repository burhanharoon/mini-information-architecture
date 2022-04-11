import express from 'express'
import Student from '../models/studentModel.js'
const router = express.Router()

const sortDesending = object => Object.keys(object).sort(function (a, b) { return object[b] - object[a] })

/* returns: How many students are taking each subject */
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

/* returns: Three most popular EE subjects */
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

/* returns: List of students having D or F grade in a subject */
router.get('/poorGrades', async (req, res) => {
    const students = await Student.find({})
    let poorGrades = []
    students.forEach(student => {
        if (student.grade == 'D' || student.grade == 'F') {
            let temp = {
                name: student.name,
                grade: student.grade
            }
            poorGrades = [...poorGrades, temp]
        }
    })
    res.send(poorGrades)
})

/* returns: List of all students */
router.get("/allStudents", async (req, res) => {
    const students = await Student.find({})
    res.send(students)
})

router.post('/addStudent', async (req, res) => {

    const { name, email, subject, grade } = req.body
    const studentExists = await Student.findOne({ email })

    if (studentExists) {
        res.send({ result: false })
    } else {
        const student = await Student.create({
            name, email, subject, grade
        })
        if (student) {
            res.send({ result: true })
        }
    }
})

router.get("/", (req, res) => {
    res.send("Sending Student Routes")
})

export default router