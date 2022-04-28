import mongoose from 'mongoose'

const teacherSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        firstChoice: {
            type: String,
            required: true,
        },
        secondChoice: {
            type: String,
            required: true,
        },
        assignedStudents: {
            type: Number,
            required: true,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
)

const Teacher = mongoose.model('Teacher', teacherSchema)

export default Teacher