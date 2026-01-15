const express = require("express")
const { signUp } = require("../controllers/authController.js")

const authRouter = express.Router()

authRouter.post("/signup", signUp) // ✅ controller added

module.exports = authRouter
