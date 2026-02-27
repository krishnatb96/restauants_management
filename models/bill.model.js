
const mongoose = require("mongoose");
const billSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: "Hotel",
    },
  items: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        },
        name:String,
        quantity: Number,
        price: Number,
        gstRate: Number,
    },
  ],
  subtotal: Number,
  cgst: Number,
    sgst: Number,
    total: Number,
    paymentMethod: String,
   createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",    
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },},{
    timestamps: true,
});
const Bill = mongoose.model("Bill", billSchema);    
module.exports = Bill;