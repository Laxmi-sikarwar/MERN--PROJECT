const express = require("express")
const { test } = require("../controllers/UserController.js")

const UserRouter = express.Router()

UserRouter.get("/test", test)

module.exports = UserRouter
