const express = require("express")
const productRouter = express.Router()
const productController = require("../controllers/product.controller")

productRouter.post("/add", productController.addProduct)
productRouter.get("/getall", productController.getAllProducts)
productRouter.get("/getbycategory/:category", productController.getProductsByCategory)
productRouter.get("/getbyid/:productId", productController.getProductById)

module.exports = { productRouter }