import express from 'express'
import SubjectAssignment from '../models/assignmentModel.js'
import Teacher from '../models/teacherModel.js'
const router = express.Router()

router.put('/assignSubjects', async (req, res) => {
    const choiceSubject = await SubjectAssignment.find({})
    const teachers = await Teacher.find({})
    if (choiceSubject[0].teacherName) {
        res.send(choiceSubject)

    }
    else {

        for (let i = 0; i < choiceSubject.length; i++) {

            for (let j = 0; j <= teachers.length; j++) {

                /*
                This loop will execute when there the student's subject isn't any teacher's first choice 
                In this case it will loop through the teachers and tries to assign the student based on teacher second choice
                */
                if (j === teachers.length) {
                    for (let k = 0; k < teachers.length; k++) {

                        if (teachers[k].secondChoice === choiceSubject[i].subject) {

                            SubjectAssignment.updateOne({ _id: choiceSubject[i]._id }, { $set: { teacherName: teachers[k].name } }, (err, res) => {
                                if (err) throw err;
                            })
                            Teacher.updateOne({ _id: teachers[k]._id }, { $inc: { assignedStudents: 1 } }, (err, res) => {
                                if (err) throw err;
                            })
                            break
                        }
                    }
                }

                /* 
                Usually this loop runs
                It tries to find student's subject to teacher's first choice and if found assigns the student to that teacher
                It also checks if a teacher has already been assigned 3 students
                In that case it leaves that teacher moves to another one and tries to find student's subject to other teacher's first choice of subject
                */
                else if (teachers[j].firstChoice === choiceSubject[i].subject) {

                    const { assignedStudents } = await Teacher.findOne({ _id: teachers[j]._id })
                    if (assignedStudents > 2) {
                        continue
                    }
                    else {
                        SubjectAssignment.updateOne({ _id: choiceSubject[i]._id }, { $set: { teacherName: teachers[j].name } }, (err, res) => {
                            if (err) throw err;
                        })
                        Teacher.updateOne({ _id: teachers[j]._id }, { $inc: { assignedStudents: 1 } }, (err, res) => {
                            if (err) throw err;
                        })
                        break
                    }

                }
            }
        }
        const actualChoiceSubject = await SubjectAssignment.find({})
        res.send(actualChoiceSubject)
    }

})

router.get("/", (req, res) => {
    res.send("Sending Assignment Routes")
})

export default router