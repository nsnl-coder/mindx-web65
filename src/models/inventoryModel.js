const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    sku: String,
    description: String,
    inStock: Number,
  },
  { toJSON: {}, timestamps: true },
);

const InventoryModel = mongoose.model('inventory', schema);

module.exports = InventoryModel;
