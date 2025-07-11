import express from 'express';
import { destination, itinerary } from '../controller/destination.controller.js';

const routes = express.Router();

routes.get('/:type', destination);
routes.get('/trending-destinatiojn/:place', itinerary);
