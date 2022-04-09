import express from 'express'
import Teacher from '../models/teacherModel.js'
const router = express.Router()

const sortDesending = object => Object.keys(object).sort(function (a, b) { return object[b] - object[a] })

router.get('/leastFirstChoiceSubject', async (req, res) => {
    const teachers = await Teacher.find({})
    let subjectChoicesCount = {}

    teachers.forEach(teacher => {
        if (subjectChoicesCount.hasOwnProperty(teacher.firstChoice)) {
            subjectChoicesCount[teacher.firstChoice] += 1
        }
        else {
            subjectChoicesCount[teacher.firstChoice] = 1
        }

    })
    res.send(subjectChoicesCount)
})

router.get('/search/:name', async (req, res) => {
    let name = req.params.name
    const teachers = await Teacher.find({ name })

    res.send(teachers)
})

router.get('/mathSecondSubject', async (req, res) => {

    let mathSubjectTeachers = []
    const teachers = await Teacher.find({})
    teachers.forEach(teacher => {
        if (teacher.secondChoice === 'math') {
            mathSubjectTeachers.push(teacher.name)
        }
    })
    res.send(mathSubjectTeachers)
})

router.post('/addTeacher', async (req, res) => {

    const { name, email, firstChoice, secondChoice } = req.body
    const teacherExists = await Teacher.findOne({ email })

    if (teacherExists) {
        res.send({ result: false })
    } else {
        const teacher = await Teacher.create({
            name, email, firstChoice, secondChoice
        })
        if (teacher) {
            res.send({ result: true })
        }
    }
})


router.get("/", (req, res) => {
    res.send("Sending Teacher Routes")
})

export default router