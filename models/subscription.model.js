const mongoose = require("mongoose");

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
const Subscription = mongoose.model("Subscription", subscriptionSchema);
module.exports = Subscription;