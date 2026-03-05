import express from 'express';
import {
  getAllEmployees,
  getCreateForm,
  createEmployee,
  getEmployeeById,
  getEditForm,
  updateEmployee,
  deleteEmployee,
  searchEmployees
} from '../controllers/employeeController.js';
import { employeeValidationRules, validate } from '../middleware/validation.js';

const router = express.Router();

router.get('/', getAllEmployees);

router.get('/search', searchEmployees);

router.get('/create', getCreateForm);

router.post('/', employeeValidationRules(), validate, createEmployee);

router.get('/:id', getEmployeeById);

router.get('/:id/edit', getEditForm);

router.put('/:id', employeeValidationRules(), validate, updateEmployee);

router.delete('/:id', deleteEmployee);

export default router;
