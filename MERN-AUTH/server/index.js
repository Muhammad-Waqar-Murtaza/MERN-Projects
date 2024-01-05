const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")

const app = express()
const port = process.env.PORT || 3000
// middleware
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin',req.header('Origin'));
//     res.removeHeader('x-powered-by');
//     //allow access to current method
//     res.setHeader('Access-Control-Allow-Methods',req.method);
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     next();
// })

app.use(cors())

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

app.listen(port, () => {
    console.log("Database & Server connection established")
})