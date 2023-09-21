const express = require("express")
const cors = require("cors")
require("dotenv").config()
const app = express()
const { connection } = require("./config/db")

app.use(express.json())
app.use(cors())

app.get("/get", (req, res) => {
    res.status(200).send({ "msg": "Welcome!" })
})

// app.use("/api", )

const port = process.env.port
app.listen(port, async ()=> {
    try {
        await connection
        console.log(`Connected to db @ port ${port}`)
    } catch (error) {
        console.log("Error connecting to DB")
        console.log(error)
    }
})