const mongoose = require("mongoose")

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // Reference to the User model
    required: true,
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
}, {
  versionKey: false
})

const userModel = mongoose.model("order", orderSchema)

module.exports = { userModel }