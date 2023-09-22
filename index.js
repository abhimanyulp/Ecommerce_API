const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const { connection } = require("./configs/db")
const { userRouter } = require("./routes/user.route")
const { productRouter } = require("./routes/product.route")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send({ "msg": "Welcome - Ecommerce_API!" })
})
app.use("/user", userRouter)
app.use("/product", productRouter)


app.listen(process.env.port, () => {
    connection();
    console.log(`Server running at http://localhost:${process.env.port}`)
})