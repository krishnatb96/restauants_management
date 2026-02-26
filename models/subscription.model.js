import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  hotelId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hotel",
    },
    plan: {
        type: String,
    },
    validTill: {
        type: Date,
        required: true, 
    },
    isActive: {
        type: Boolean,
        default: true,
    },

},{
    timestamps: true,
});
export default mongoose.model("Subscription", subscriptionSchema);