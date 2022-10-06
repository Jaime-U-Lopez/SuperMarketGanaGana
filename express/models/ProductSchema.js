const mongoose = require("mongoose");

const ProductSchem = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },

  category: {
    type: String,
    required: true,
  },

  ubication: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  dateCreate: {
    type: Date,
    default: Date.now(),
  },
});

module.exports= mongoose.model('Product',ProductSchem)
