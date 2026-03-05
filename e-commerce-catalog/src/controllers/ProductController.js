import ProductService from '../services/ProductService.js';

export default class ProductController {
  static async create(req, res) {
    try {
      const product = await ProductService.createProduct(req.body);
      res.status(201).json(product);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get(req, res) {
    try {
      const product = await ProductService.getProduct(req.params.id);
      if (!product) return res.status(404).send('Not found');
      res.json(product);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const updated = await ProductService.updateProduct(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await ProductService.deleteProduct(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async list(req, res) {
    try {
      const products = await ProductService.listProducts(req.query);
      res.json(products);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
