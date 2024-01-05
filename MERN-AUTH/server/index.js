const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")
const corsMiddleware = require('./middlewares/corsMiddleware')

const app = express()

// middleware
app.use(corsMiddleware)
app.use(express.json())
connectDB()

// app routes

app.get("/", (req, res) => {
    res.send("app is running")
})
app.use('/user', userRoutes)

// error middleware
app.use(errorHandler)

// connecting to database

app.listen(3000, async () => {
    console.log("Database & Server connection established")
})