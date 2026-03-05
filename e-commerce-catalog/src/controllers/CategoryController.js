import CategoryService from '../services/CategoryService.js';

// Controller layer: glue between HTTP requests and service logic.
// Handles request/response objects and error catching.

export default class CategoryController {
  static async create(req, res) {
    try {
      const category = await CategoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async get(req, res) {
    try {
      const category = await CategoryService.getCategory(req.params.id);
      if (!category) return res.status(404).send('Not found');
      res.json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async update(req, res) {
    try {
      const updated = await CategoryService.updateCategory(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  static async delete(req, res) {
    try {
      await CategoryService.deleteCategory(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async list(req, res) {
    try {
      const categories = await CategoryService.listCategories(req.query);
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}
