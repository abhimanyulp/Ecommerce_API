const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cart: [
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
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"

    }
}, {
    versionKey: false
})

const userModel = mongoose.model("user", userSchema)

module.exports = { userModel }