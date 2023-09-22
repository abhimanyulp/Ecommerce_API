const express = require("express")
const productRouter = express.Router()
const { somefunction } = require("../controllers/product.controller")

productRouter.post("/", somefunction)

module.exports = { productRouter }