import express from 'express';
import { planYourJourney, contact, subscribe, suggestionComplain } from '../controller/leads.controller.js';


const router=express.Router();
router.post('/planYourJourney',planYourJourney)
router.post('/contact',contact)
router.post('/subscribe',subscribe)
router.post('/suggestionComplain', suggestionComplain);
 
export default router;