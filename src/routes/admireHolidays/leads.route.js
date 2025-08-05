


import express from 'express';
import { validate } from '../../middleware/validator.js'; // ✅ Use only this

import {
  planYourJourney,
  contact,
  subscribe,
  suggestionComplain,
} from '../../controller/leads.controller.js';

import {
  contactValidator,
  planYourJourneyValidator,
  subscribeValidator,
  suggestionComplainValidator,
} from '../../validate/leads.validate.js';

const leadsRoute = express.Router();


// Add this test route
leadsRoute.get('/test', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is working fine 🎉'
  });
});


leadsRoute.post('/planYourJourney', planYourJourneyValidator, validate, planYourJourney);
leadsRoute.post('/contact', contactValidator, validate, contact);
leadsRoute.post('/subscribe', subscribeValidator, validate, subscribe);
leadsRoute.post('/suggestionComplain', suggestionComplainValidator, validate, suggestionComplain);

export default leadsRoute;

