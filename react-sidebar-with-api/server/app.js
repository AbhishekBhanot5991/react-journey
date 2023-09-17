import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import connectDB from './config/connectdb.js'
import userRoutes from './routes/userRoutes.js'
const app = express();

// accessing PORT from .env file
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// CORS Policy
app.use(cors())

//Database connection
connectDB(DATABASE_URL)

//JSON
app.use(express.json())

//Load Routes
app.use("/api/user", userRoutes)

app.listen(port,()=>{
    console.log(`server is listening at http://localhost:${port}`)
})