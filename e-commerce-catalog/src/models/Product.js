import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// Product schema defines basic attributes. Products are stored
// separately but can be referenced from categories (embedding would
// duplicate data and make updates harder).

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  sku: { type: String, unique: true },
  // additional fields such as inventory, images, etc. could go here
});

export default model('Product', ProductSchema);
