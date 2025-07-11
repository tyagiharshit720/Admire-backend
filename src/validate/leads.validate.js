import { body } from 'express-validator';
export const LeadsValidator = [

    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('phone').notEmpty().withMessage('Mobile Number is required'),
    body('phone').isMobilePhone("en-IN").withMessage('Mobile Number is invalid'),
    // body('message').isLength({min:10}).withMessage('Message must be at least 10 characters long'),
    // body('subject').notEmpty().withMessage('Subject is required'),
    // body('subject').isLength({min:3}).withMessage('Subject must be at least 3 characters long'),
    body('destination').notEmpty().withMessage('Destination is required'),
]

