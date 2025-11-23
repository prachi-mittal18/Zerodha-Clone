const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
    mode: String,
  price: Number,
});
module.exports = { OrdersSchema };