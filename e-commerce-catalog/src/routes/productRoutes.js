import { Router } from 'express';
import ProductController from '../controllers/ProductController.js';

const router = Router();

router.post('/', ProductController.create);
router.get('/', ProductController.list);
router.get('/:id', ProductController.get);
router.put('/:id', ProductController.update);
router.delete('/:id', ProductController.delete);

export default router;
