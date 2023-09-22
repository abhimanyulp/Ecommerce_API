const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
    try {
        await mongoose.connect(process.env.mongoUrl)
        console.log(`Connected to mongoDB`)
    } catch (error) {
        console.log("Error connecting to mongoDB")
        console.log(error)
    }
}


module.exports = { connection }