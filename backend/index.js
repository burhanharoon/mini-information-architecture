import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import bodyparser from 'body-parser'
import studentRoutes from "./routes/studentRoutes.js"
import teacherRoutes from "./routes/teacherRoutes.js"
import assignmentRoutes from "./routes/assignmentRoutes.js"

dotenv.config();

connectDB();

const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/api/student', studentRoutes)
app.use('/api/teacher', teacherRoutes)
app.use('/api/assignment', assignmentRoutes)
app.get('/', (req, res) => {
    res.send("Api is running successfully")
})


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))
