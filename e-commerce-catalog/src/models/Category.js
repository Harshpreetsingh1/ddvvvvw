import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const CategorySchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    subcategories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
});

export default model('Category', CategorySchema);
