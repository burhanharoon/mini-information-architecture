import express, { json } from 'express'
import dotenv from "dotenv"
import connectDB from './config/db.js'
import bodyparser from 'body-parser'
import Student from "./models/studentModel.js";
import studentRoutes from "./routes/studentRoutes.js"

dotenv.config();

connectDB();

const app = express()

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/api/student', studentRoutes)
app.get('/', (req, res) => {
    res.send("Api is running dude damn")
})


const PORT = process.env.PORT || 5000

app.listen(5000, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`))