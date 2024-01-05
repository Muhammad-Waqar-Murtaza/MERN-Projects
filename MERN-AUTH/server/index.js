const express = require('express')
const cors = require('cors')
const { connectDB } = require('./database/database')
const { userRoutes } = require('./routes/userRoutes')
const { errorHandler } = require("./middlewares/errorMiddleware")

const app = express()

// middleware
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin',req.header('Origin'));
//     res.removeHeader('x-powered-by');
//     //allow access to current method
//     res.setHeader('Access-Control-Allow-Methods',req.method);
//     res.setHeader('Access-Control-Allow-Headers','Content-Type');
//     next();
// })

app.use(cors({
    origin: ["https://mern-projects-iota.vercel.app/https://form-auth-server.vercel.app/"],
    methods: ["POST, GET"],
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