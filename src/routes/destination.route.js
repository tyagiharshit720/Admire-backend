import express from 'express';
import {itineraries, blog} from '../controller/destination.controller.js';

const itinerariesRoute=express.Router();
itinerariesRoute.get('/itineraries', itineraries);
itinerariesRoute.get('/blog',blog)

// routes.get('/:type',destination);
// routes.get('/trending-destinatiojn/:place',itinerary);

export default itinerariesRoute;