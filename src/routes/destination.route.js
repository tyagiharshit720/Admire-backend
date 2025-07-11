import express from 'express';
import {itineraries} from '../controller/destination.controller.js';

const itinerariesRoute=express.Router();
itinerariesRoute.get('/itineraries', itineraries);


// routes.get('/:type',destination);
// routes.get('/trending-destinatiojn/:place',itinerary);

export default itinerariesRoute;

