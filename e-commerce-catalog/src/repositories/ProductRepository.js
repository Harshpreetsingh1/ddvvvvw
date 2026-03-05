import Product from '../models/Product.js';

export default class ProductRepository {
  static async create(data) {
    const product = new Product(data);
    return product.save();
  }

  static async findById(id) {
    return Product.findById(id).exec();
  }

  static async update(id, data) {
    return Product.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  static async delete(id) {
    return Product.findByIdAndDelete(id).exec();
  }

  static async list(filter = {}) {
    return Product.find(filter).exec();
  }
}
