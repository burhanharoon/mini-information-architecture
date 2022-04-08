import express from 'express'
import Teacher from '../models/teacherModel.js'
const router = express.Router()

const sortDesending = object => Object.keys(object).sort(function (a, b) { return object[b] - object[a] })

router.get('/leastFirstChoice', async (req, res) => {
    const teachers = await Teacher.find({})
    let subjectChoicesCount = {}

    teachers.forEach(teacher => {
        if (subjectChoicesCount.hasOwnProperty(teacher.firstChoice)) {
            subjectChoicesCount = { ...subjectChoicesCount, [teacher.firstChoice]: { firstChoice: subjectChoicesCount[teacher.firstChoice].firstChoice + 1 } }
        }
        else {
            subjectChoicesCount = { ...subjectChoicesCount, [teacher.firstChoice]: { firstChoice: 1 } }
        }

    })
    res.send(subjectChoicesCount)
})

router.get("/", (req, res) => {
    res.send("Sending Teacher Routes")
})

export default router