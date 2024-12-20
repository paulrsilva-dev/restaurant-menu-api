const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Item name is mandatory
  },
  price: {
    type: Number,
    required: true, // Price is mandatory
    min: 0, // Ensure price is non-negative
  },
  description: {
    type: String, // Optional description of the item
    required: false,
  },
  availability: {
    type: Boolean,
    default: true, // Defaults to available
  },
});

const menuSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true, // Category name is mandatory
  },
  items: {
    type: [menuItemSchema], // Items is an array of `menuItemSchema`
    required: true, // Items array is mandatory
    validate: [items => items.length > 0, 'Items array cannot be empty'], // Ensure at least one item
  },
});

module.exports = mongoose.model('Menu', menuSchema);
