import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    },
    name: {
        type: String,
        required: true,
    },
    gstRate: Number,
    stock: Number,
    brand: String,
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true, 
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
export default mongoose.model("Product", productSchema);    