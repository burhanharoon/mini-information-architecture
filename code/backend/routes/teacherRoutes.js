import express from 'express'
import Teacher from '../models/teacherModel.js'
const router = express.Router()


/* returns: List of EE subjects with the fewest teachers as their 1st choice */
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


/* returns: Search for a student */
router.get('/search/:name', async (req, res) => {
    let name = req.params.name
    const teachers = await Teacher.find({ name })

    res.send(teachers)
})


/* returns: List all teachers who have selected Math as their 2nd choice */
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


/* returns: Adds a new teacher to DB */
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


/* returns: List of all teachers */
router.get("/allTeachers", async (req, res) => {
    const teachers = await Teacher.find({})
    res.send(teachers)
})

router.get("/", (req, res) => {
    res.send("Sending Teacher Routes")
})

export default router