const express = require("express")
const orderRouter = express.Router()
const { somefunction } = require("../controllers/order.controller")

orderRouter.post("/", somefunction)

module.exports = { orderRouter }