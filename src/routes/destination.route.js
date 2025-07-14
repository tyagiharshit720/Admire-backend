import express from 'express';
import {
  trendingDestination,
  ourResorts,
  destinationIteneries,
  internationalDestinations,
  domesticDestinations,
} from '../controller/destination.controller.js';

const destinationRoute = express.Router();

destinationRoute.get('/international-destinations', internationalDestinations);
destinationRoute.get('/domestic-destinations', domesticDestinations);
destinationRoute.get('/trending-destination', trendingDestination);
destinationRoute.get('/trending-destination/:place', destinationIteneries);
destinationRoute.get('/resorts', ourResorts);

export default destinationRoute;
