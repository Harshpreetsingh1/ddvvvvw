import mongoose from 'mongoose';
const { Schema, model } = mongoose;

// The Category schema uses a nested document structure to represent
// hierarchical categories. Each category can have an array of child
// categories and a list of products (referenced by ObjectId).
// Using nested subdocuments allows for fast reads of the full tree.

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
