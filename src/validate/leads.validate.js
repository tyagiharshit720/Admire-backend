import { body } from 'express-validator';
export const LeadsValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Mobile Number is required'),
  body('phone').isMobilePhone('en-IN').withMessage('Mobile Number is invalid'),
  
  body('destination').notEmpty().withMessage('Destination is required'),
];
