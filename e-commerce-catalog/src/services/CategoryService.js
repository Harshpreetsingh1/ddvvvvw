import CategoryRepository from '../repositories/CategoryRepository.js';

// Service layer: contains business logic. It orchestrates multiple
// repository calls and enforces rules (e.g. preventing cycles in the
// category tree). Controllers use services to keep request handling
// thin.

export default class CategoryService {
    static async createCategory(data) {
        // optional logic to attach the new category as a child of a parent
        const { parentId, ...rest } = data;
        const category = await CategoryRepository.create(rest);

        // if a parentId was provided, update the parent document
        if (parentId) {
            const parent = await CategoryRepository.findById(parentId);
            if (!parent) {
                throw new Error('Parent category not found');
            }
            parent.subcategories.push(category._id);
            await parent.save();
        }

        return category;
    }

    static async getCategory(id) {
        return CategoryRepository.findById(id);
    }

    static async updateCategory(id, data) {
        return CategoryRepository.update(id, data);
    }

    static async deleteCategory(id) {
        // remove reference from any parent
        const categories = await CategoryRepository.list({ subcategories: id });
        for (const parent of categories) {
            parent.subcategories = parent.subcategories.filter(
                sub => sub.toString() !== id.toString()
            );
            await parent.save();
        }
        return CategoryRepository.delete(id);
    }

    static async listCategories(filter) {
        return CategoryRepository.list(filter);
    }
}
