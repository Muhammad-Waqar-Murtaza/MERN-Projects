const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")

const app = express()

// middleware

app.use((req, res, next) => {
    //allow access from every, elminate CORS
    res.setHeader('Access-Control-Allow-Origin','*');
    res.removeHeader('x-powered-by');
    //set the allowed HTTP methods to be requested
    res.setHeader('Access-Control-Allow-Methods','POST');
    //headers clients can use in their requests
    res.setHeader('Access-Control-Allow-Headers','Content-Type');
    //allow request to continue and be handled by routes
    next();
  });
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