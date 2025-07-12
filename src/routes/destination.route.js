import express from 'express';
import { itineraries, trendingDestination, ourResorts, destinationIteneries } from '../controller/destination.controller.js';

const destinationRoute = express.Router();
destinationRoute.get('/itineraries', itineraries);
destinationRoute.get('/trending-destination', trendingDestination); 
destinationRoute.get('/trending-destination/:place', destinationIteneries)
destinationRoute.get('/resorts', ourResorts);

// routes.get('/:type',destination);
// routes.get('/trending-destinatiojn/:place',itinerary);

export default destinationRoute;
