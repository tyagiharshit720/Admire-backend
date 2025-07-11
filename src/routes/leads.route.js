
import express from 'express';

import {
  planYourJourney,
  contact,
  subscribe,
  suggestionComplain,
} from '../controller/leads.controller.js';

import { validate } from '../middelware/validator.js';
import { LeadsValidator } from '../validate/leads.validate.js';



const router = express.Router();
router.post("/planYourJourney", LeadsValidator, validate, planYourJourney);
router.post("/contact", LeadsValidator, validate, contact);
router.post("/subscribe", LeadsValidator, validate, subscribe);
router.post(
  "/suggestionComplain",
  validate,
  LeadsValidator,
  suggestionComplain
);

export default router;
