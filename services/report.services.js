
const Bill = require("../models/bill.model");
 const generateFLTR3A = async (hotelId, start, end) => {
  return await Bill.aggregate([
    {
      $match: {
        hotelId,
        createdAt: { $gte: new Date(start), $lte: new Date(end) }
      }
    },
    { $unwind: "$items" },
    {
      $group: {
        _id: "$items.name",
        totalQty: { $sum: "$items.qty" },
        totalAmount: {
          $sum: { $multiply: ["$items.qty", "$items.price"] }
        }
      }
    }
  ]);
};
module.exports = { generateFLTR3A };