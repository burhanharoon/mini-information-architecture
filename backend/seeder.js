import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Student from './models/studentModel.js'
import Teacher from './models/teacherModel.js'
import SubjectAssignment from './models/assignmentModel.js'
import connectDB from './config/db.js'
import students from './data/students.js'
import teachers from './data/teachers.js'
import assignments from './data/assignments.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Student.deleteMany()
        await Teacher.deleteMany()
        await SubjectAssignment.deleteMany()

        await Student.insertMany(students)
        await Teacher.insertMany(teachers)
        await SubjectAssignment.insertMany(assignments)

        console.log('Data Imported!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

        console.log('Data Destroyed!')
        process.exit()
    } catch (error) {
        console.error(`${error}`)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}