import mongoose from "mongoose";

export const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  gstNumber: String,
  address:String,
  phone:String,
  subscription:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subscription",
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
export default mongoose.model("Hotel", hotelSchema);