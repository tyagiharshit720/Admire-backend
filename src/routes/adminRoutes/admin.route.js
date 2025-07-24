import express from 'express';
import { authorizeAdmin, auth } from '../../middleware/auth.js';
import uploadMedia from '../../middleware/mediaUploads.js';
import { imageGallery, getImageForPlace } from '../../controller/admin/imageGallery.controller.js';
import {
  AdminUserVerify,
  AdminUserCreate,
  changePassword,
  userExistedInAdmin,
  getMe,
  logout,
   deleteUser
} from '../../controller/admin/user.admin.controller.js';
import { customerGallery } from '../../controller/admin/customerGallery.admin.controller.js';
import { destination_Internation_Or_Domestic } from '../../controller/admin/destination.admin.controller.js';
import { addDestination_Domestic_Internationl } from '../../controller/admin/destination.admin.controller.js';
import { getTNC, TNC } from '../../controller/admin/termsAndCondition.admin.controller.js';
import {
  getPaymentMethod,
  paymentMethod,
} from '../../controller/admin/paymentMode.admin.controller.js';
import {
  updateCancellationPolicy,
  getCancellationPolicy,
} from '../../controller/admin/cancellation.admin.controller.js';
import { testimonialVideo } from '../../controller/admin/testimonialVideo.admin.controller.js';
import { createItinerary } from '../../controller/admin/itinaray.admin.controller.js';
import { heroSection } from '../../controller/admin/heroSection.admin.controller.js';
import {
  getPlanYourJourney,
  getContact,
  getSubscribe,
  getSuggestions,
} from '../../controller/admin/leads.admin.controller.js';
import { createCity, getCity } from '../../controller/admin/cities.admin.controller.js';
import { postBlog, getBlog } from '../../controller/admin/Blog.admin.controller.js';

const adminRoute = express.Router();

//Admine Authenticatiomn Section
adminRoute.post('/admin-login', AdminUserVerify);
adminRoute.get('/me', auth, getMe);
adminRoute.post('/logout', auth, logout);
adminRoute.patch('/change-password', auth, authorizeAdmin, changePassword);

// Admin only section no user acccess
adminRoute.post('/add-user', auth, authorizeAdmin, AdminUserCreate);
adminRoute.get('/get-admin-user', auth, authorizeAdmin, userExistedInAdmin);
adminRoute.delete('/delete-user/:userId',auth, authorizeAdmin,deleteUser)

// Image Gallery Section
adminRoute.post('/image-Gallery', auth, uploadMedia.array('image'), imageGallery);
adminRoute.get('/image-Gallery/:destination_name', auth, getImageForPlace);

// Destination Section
adminRoute.get('/destination/:type', auth, destination_Internation_Or_Domestic);
adminRoute.post('/new-destination', auth, addDestination_Domestic_Internationl);
adminRoute.post('/itinerary', auth, uploadMedia.single('image'), createItinerary);
adminRoute.post('/city', auth, uploadMedia.single('image'), createCity);
adminRoute.get('/city/:destinationId', auth, getCity);

// Terms And Conditions Section
adminRoute.get('/tnc/:id', auth, getTNC);
adminRoute.patch('/tnc', auth, TNC);

// Payment Mode Section
adminRoute.get('/payment-mode/:type', auth, getPaymentMethod);
adminRoute.post('/payment-mode', auth, paymentMethod);

// Cancellation Policy Section
adminRoute.get('/cancellation-policy', auth, getCancellationPolicy);
adminRoute.put('/cancellation-policy', auth, updateCancellationPolicy);

// Customer Section
adminRoute.post('/customer-gallery', auth, uploadMedia.array('image'), customerGallery);

// Testimonial Section
adminRoute.post('/testimonial-video', auth, uploadMedia.single('image'), testimonialVideo);

// Hero Section
adminRoute.post('/hero-section', auth, uploadMedia.single('image'), heroSection);

// Leads Section
adminRoute.get('/plan-your-journey', auth, getPlanYourJourney);
adminRoute.get('/get-contact', auth, getContact);
adminRoute.get('/get-subscribe', auth, getSubscribe);
adminRoute.get('/get-suggestions', auth, getSuggestions);

// Blog Section
adminRoute.post('/blog', uploadMedia.single('coverImage'), postBlog);
adminRoute.get('/blog', auth, getBlog);

export default adminRoute;
