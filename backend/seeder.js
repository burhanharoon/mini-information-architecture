import mongoose from 'mongoose'
import dotenv from 'dotenv'
import students from './data/students.js'
// import users from './data/users.js'
// import products from './data/products.js'
import Student from './models/studentModel.js'
import Teacher from './models/teacherModel.js'
import SubjectAssignment from './models/subjectAssignment.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Student.deleteMany()
        await Teacher.deleteMany()
        await SubjectAssignment.deleteMany()

        // const createdUsers = await User.insertMany(users)
        await Student.insertMany(students)

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