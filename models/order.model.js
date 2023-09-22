const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'product', // Reference to the Product model
            required: true,
          },
          quantity: {
            type: Number,
            required: true,
          },
        }
    ],
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        default: "pending"
    },
})

const userModel = mongoose.model("order", orderSchema)

module.exports = { userModel }