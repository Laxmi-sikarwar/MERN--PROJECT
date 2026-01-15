const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const UserRouter = require("./routes/UserRoute.js")

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

app.listen(3000, () => {
    console.log("Server is running on Port 3000")
})
