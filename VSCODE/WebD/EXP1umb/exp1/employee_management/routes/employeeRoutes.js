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

/**
 * RESTful Routes for Employee Management
 * Mapping routes to CRUD operations
 */

// GET - List all employees
router.get('/', getAllEmployees);

// GET - Search employees
router.get('/search', searchEmployees);

// GET - Show create form
router.get('/create', getCreateForm);

// POST - Create new employee
router.post('/', employeeValidationRules(), validate, createEmployee);

// GET - Show single employee
router.get('/:id', getEmployeeById);

// GET - Show edit form
router.get('/:id/edit', getEditForm);

// PUT - Update employee
router.put('/:id', employeeValidationRules(), validate, updateEmployee);

// DELETE - Delete employee
router.delete('/:id', deleteEmployee);

export default router;
