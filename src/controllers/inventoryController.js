const InventoryModel = require('../models/inventoryModel');

const getAllInventory = async (req, res, next) => {
  const lowInventory = req.query.lowInventory;

  let filter = {};

  if (lowInventory === 'true') {
    filter.instock = {
      $lt: 100,
    };
  }

  const inventory = await InventoryModel.find(filter);
  res.status(200).json({
    status: 'success',
    data: inventory,
  });
};

module.exports = {
  getAllInventory,
};
