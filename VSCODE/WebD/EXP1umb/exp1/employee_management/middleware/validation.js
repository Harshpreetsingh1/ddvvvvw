import { body, validationResult } from 'express-validator';

const employeeValidationRules = () => {
  return [
    body('name')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Name is required')
      .isLength({ min: 2 })
      .withMessage('Name must be at least 2 characters long'),
    
    body('email')
      .trim()
      .isEmail()
      .withMessage('Please provide a valid email address')
      .normalizeEmail(),
    
    body('empId')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Employee ID is required')
      .matches(/^[A-Z0-9]+$/)
      .withMessage('Employee ID must contain only uppercase letters and numbers'),
    
    body('department')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Department is required'),
    
    body('designation')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Designation is required'),
    
    body('salary')
      .optional()
      .isInt({ min: 0 })
      .withMessage('Salary must be a positive number'),
    
    body('phone')
      .trim()
      .matches(/^\d{10}$/)
      .withMessage('Phone number must be exactly 10 digits'),
    
    body('address')
      .trim()
      .not()
      .isEmpty()
      .withMessage('Address is required'),
    
    body('city')
      .trim()
      .not()
      .isEmpty()
      .withMessage('City is required'),
    
    body('state')
      .trim()
      .not()
      .isEmpty()
      .withMessage('State is required')
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).render('error', {
      message: 'Validation Error',
      errors: errors.array()
    });
  }
  next();
};

export { employeeValidationRules, validate };
