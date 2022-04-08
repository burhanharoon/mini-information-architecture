import express from 'express'
import SubjectAssignment from '../models/assignmentModel.js'
import Teacher from '../models/teacherModel.js'
const router = express.Router()

router.put('/assignSubjects', async (req, res) => {
    const choiceSubject = await SubjectAssignment.find({})
    const teachers = await Teacher.find({})
    // assignmentStudents.forEach(async ({ _id, name, subject }) => {

    //     for (let i = 0; i < teachers.length; i++) {
    //         const { assignedStudents } = await Teacher.findOne({ _id: teachers[i]._id })
    //         if (teachers[i].firstChoice === subject && assignedStudents < 3) {
    //             // if (assignedStudents <= 3) {
    //             SubjectAssignment.updateOne({ _id }, { $set: { teacherName: teachers[i].name } }, (err, res) => {
    //                 if (err) throw err;
    //             })
    //             Teacher.updateOne({ _id: teachers[i]._id }, { $inc: { assignedStudents: 1 } }, (err, res) => {
    //                 if (err) throw err;
    //             })
    //             break
    //             // }
    //             // else {
    //             //     continue
    //             // }
    //         }
    //         // else if (teachers[i].secondChoice === subject) {
    //         //     SubjectAssignment.updateOne({ _id }, { $set: { teacherName: teachers[i].name } }, (err, res) => {
    //         //         if (err) throw err;
    //         //     })
    //         //     Teacher.updateOne({ _id: teachers[i]._id }, { $inc: { assignedStudents: 1 } }, (err, res) => {
    //         //         if (err) throw err;
    //         //     })
    //         //     break
    //         // }

    //     }
    // })

    for (let i = 0; i < choiceSubject.length; i++) {

        for (let j = 0; j <= teachers.length; j++) {

            if (j === teachers.length) {
                for (let k = 0; k < teachers.length; k++) {

                    if (teachers[k].secondChoice === choiceSubject[i].subject) {

                        const { assignedStudents } = await Teacher.findOne({ _id: teachers[k]._id })
                        console.log(assignedStudents);
                        if (assignedStudents > 2) {
                            continue
                        }
                        else {
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
            }
            /* 
            Usually this loop runs
            It tries to find student's subject to teacher's first choice and if found assigns the student to that teacher
            It also checks if a teacher has already been assigned 3 students
            In that case it leaves that teacher moves to another one and tries to find student's subject to other teacher's first choice of subject
            */

            else if (teachers[j].firstChoice === choiceSubject[i].subject) {

                const { assignedStudents } = await Teacher.findOne({ _id: teachers[j]._id })
                console.log(assignedStudents);
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


    res.send("ok")
})

router.get("/", (req, res) => {
    res.send("Sending Assignment Routes")
})

export default router