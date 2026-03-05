import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  sku: { type: String, unique: true },
});

export default model('Product', ProductSchema);
