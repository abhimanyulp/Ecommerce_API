const express = require("express")
const userRouter = express.Router()
const { login, register, logout } = require("../controllers/user.controller")

userRouter.post("/login", login)
userRouter.post("/register", register)
userRouter.post("/logout/:token", logout)

module.exports = { userRouter }