import mongoose from 'mongoose'

const studentSchema = mongoose.Schema(
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
        subject: {
            type: String,
            required: true,
        },
        grade: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const Student = mongoose.model('Student', studentSchema)

export default Student