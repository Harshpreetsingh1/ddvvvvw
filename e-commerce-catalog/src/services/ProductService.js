import ProductRepository from '../repositories/ProductRepository.js';

export default class ProductService {
  static async createProduct(data) {
    // business rules like price validation could go here
    return ProductRepository.create(data);
  }

  static async getProduct(id) {
    return ProductRepository.findById(id);
  }

  static async updateProduct(id, data) {
    return ProductRepository.update(id, data);
  }

  static async deleteProduct(id) {
    return ProductRepository.delete(id);
  }

  static async listProducts(filter) {
    return ProductRepository.list(filter);
  }
}
