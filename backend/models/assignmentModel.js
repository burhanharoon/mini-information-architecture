import mongoose from 'mongoose'

const subjectAssignmentSchema = mongoose.Schema(
    {
        studentName: {
            type: String,
            required: true
        },
        teacherName: {
            type: String,
        },
        subject: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

const SubjectAssignment = mongoose.model('SubjectAssignment', subjectAssignmentSchema)

export default SubjectAssignment