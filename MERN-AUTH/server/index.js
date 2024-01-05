const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")

const app = express()

// middleware

app.use(cors({
    origin: ["https://form-auth-server.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true
}))
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