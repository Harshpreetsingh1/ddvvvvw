import Category from '../models/Category.js';

export default class CategoryRepository {
    static async create(data) {
        const category = new Category(data);
        return category.save();
    }

    static async findById(id) {
        return Category.findById(id)
            .populate('subcategories')
            .populate('products')
            .exec();
    }

    static async update(id, data) {
        return Category.findByIdAndUpdate(id, data, { new: true }).exec();
    }

    static async delete(id) {
        return Category.findByIdAndDelete(id).exec();
    }

    static async list(filter = {}) {
        return Category.find(filter)
            .populate('subcategories')
            .populate('products')
            .exec();
    }
}
