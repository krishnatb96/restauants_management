
const Bill = require("../models/bill.model");
const Product = require("../models/product.model");
 const createBill = async (req, res) => {
  const { items, paymentMethod } = req.body;
  let subtotal = 0;
  let totalGST = 0;

  const processedItems = [];

  for (let item of items) {
    const product = await Product.findById(item.productId);

    const lineTotal = product.price * item.qty;
    const gst = lineTotal * (product.gstRate / 100);

    subtotal += lineTotal;
    totalGST += gst;

    processedItems.push({
      productId: product._id,
      name: product.name,
      qty: item.qty,
      price: product.price,
      gstRate: product.gstRate
    });

    product.stock -= item.qty;
    await product.save();
  }

  const bill = await Bill.create({
    hotelId: req.user.hotelId,
    items: processedItems,
    subtotal,
    cgst: totalGST / 2,
    sgst: totalGST / 2,
    total: subtotal + totalGST,
    paymentMethod,
    createdBy: req.user.id
  });

  res.json(bill);
};
module.exports = { createBill };