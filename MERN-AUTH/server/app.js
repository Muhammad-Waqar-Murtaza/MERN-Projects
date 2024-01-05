const express = require('express')
const cors = require('cors')   
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")

const app = express()

// middleware

app.use(cors())
app.use(express.json())

// app routes

app.use('/user', userRoutes)

// error middleware
app.use(errorHandler)

// connecting to database

connectDB().then(()=>{
    app.listen(3000, async () => {
        console.log("Database & Server connection established")
    })
})