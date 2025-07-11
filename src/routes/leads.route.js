
import express from 'express';

import {
  planYourJourney,
  contact,
  subscribe,
  suggestionComplain,
} from '../controller/leads.controller.js';

const router = express.Router();
router.post('/planYourJourney', planYourJourney);
router.post('/contact', contact);
router.post('/subscribe', subscribe);
router.post('/suggestionComplain', suggestionComplain);

} from "../controller/leads.controller.js";
import { LeadsValidator } from "../validate/leads.validate.js";
import { validate } from "../middelware/validator.js";

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
