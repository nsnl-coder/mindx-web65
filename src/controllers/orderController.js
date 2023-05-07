const OrderModal = require('../models/orderModel');

const getAllOrders = async (req, res, next) => {
  const orders = await OrderModal.find({}).populate({
    path: 'populatedItem',
    select: 'description',
  });

  res.status(200).json({
    status: 'sucess',
    data: orders,
  });
};

module.exports = getAllOrders;
