import express from 'express';

import {
  planYourJourney,
  contact,
  subscribe,
  suggestionComplain,
} from '../controller/leads.controller.js';

import { validate } from '../middleware/validator.js';
import { LeadsValidator } from '../validate/leads.validate.js';

const router = express.Router();

router.post('/planYourJourney', LeadsValidator, validate, planYourJourney);
router.post('/contact', LeadsValidator, validate, contact);
router.post('/subscribe', LeadsValidator, validate, subscribe);
router.post('/suggestionComplain', LeadsValidator, validate, suggestionComplain);

export default router;
