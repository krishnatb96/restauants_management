
const subscriptionModel = require("../models/subscription.model");
 const checkSubscription = async (req, res, next) => {
    try {
        const subscription = await subscriptionModel.findOne({ hotelId: req.user.hotelId }); 
        if (!subscription || !subscription.isActive || subscription.validTill < new Date()) {  
            return res.status(402).json({ message: 'Subscription is not active or has expired' });
        }
        next();
    } catch (error) {
        console.error('Error checking subscription:', error);
        res.status(500).json({ message: 'Server error while checking subscription' });
    }
};
module.exports = { checkSubscription };