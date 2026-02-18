const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const UserRouter = require("./routes/UserRoute.js")
const authRouter = require("./routes/auth.js")

dotenv.config()

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log(err)
    })

const app = express()

app.use(express.json()) // ✅ IMPORTANT
app.use("/api/user", UserRouter)
app.use("/api/auth", authRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})

app.listen(3000, () => {
    console.log("Server is running on Port 3000")
})
