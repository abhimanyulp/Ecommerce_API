const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    descriprion: {
        type: String,
        required: true
    },
    availability: {
        bool: Boolean,
        required: true
    },
    category: {
        type: String,
        required: true,
    }
})

const productModel = mongoose.model("product", productSchema)

module.exports = { productModel }