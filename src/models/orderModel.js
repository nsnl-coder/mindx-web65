const mongoose = require('mongoose');

const schema = mongoose.Schema(
  {
    item: String,
    price: Number,
    quantity: Number,
  },
  { timestamps: true, virtuals: true, toJSON: { getters: true } },
);

schema.virtual('populatedItem', {
  ref: 'inventory',
  localField: 'item',
  foreignField: 'sku',
});

const OrderModel = mongoose.model('order', schema);

module.exports = OrderModel;
