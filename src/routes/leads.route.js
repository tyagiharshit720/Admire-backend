import express from 'express';
import { planYourJourney, contact, subscribe } from '../controller/leads.controller.js';


const router=express.Router();
router.post('/planYourJourney',planYourJourney)
router.post('/contact',contact)
router.post('/subscribe',subscribe)

export default router;