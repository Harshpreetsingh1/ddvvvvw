import { Router } from 'express';
import CategoryController from '../controllers/CategoryController.js';

const router = Router();

// HTTP endpoints for categories, connected to controller methods.
router.post('/', CategoryController.create);
router.get('/', CategoryController.list);
router.get('/:id', CategoryController.get);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);

export default router;
