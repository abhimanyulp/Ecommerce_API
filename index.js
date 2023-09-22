const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/user.route")
const { productRouter } = require("./routes/product.route")
const { cartRouter } = require("./routes/cart.route")
const { orderRouter } = require("./routes/order.route")
const { categoryRouter } = require("./routes/category.route")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send({ "msg": "Welcome - Ecommerce_API!" })
})
app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.use("/order", orderRouter)
app.use("/category", categoryRouter)


app.listen(process.env.port, () => {
    connection();
    console.log(`Server running at http://localhost:${process.env.port}`)
})