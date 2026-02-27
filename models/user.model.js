const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
  },   
  name: {
    type: String,
    required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,       
        required: true,
    },
    role: {
        type: String,   
        enum: ["admin", "cashier", "waiter"],
        default: "cashier",
    },  
    createdAt: {
        type: Date,
        default: Date.now,  
    },
    updatedAt: {
        type: Date,
        default: Date.now,  
    },
},{
    timestamps: true,
});
const User = mongoose.model("User", userSchema);
module.exports = User;