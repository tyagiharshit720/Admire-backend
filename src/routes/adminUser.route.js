import express from 'express';
// import { post } from '../controller/itineraryAdminUser.controller.js';
import { authorizeAdmin, auth } from '../middleware/auth.js';
import uploadMedia from '../middleware/mediaUploads.js';
import { imageGallery, getImageForPlace } from '../controller/admin/imageGallery.controller.js';
import {
  AdminUserVerify,
  AdminUserCreate,
  changePassword,
  userExistedInAdmin,
  getMe,
  logout,
} from '../controller/admin/user.admin.controller.js';
import { customerGallery } from '../controller/admin/customerGallery.admin.controller.js';
import { destination_Internation_Or_Domestic } from '../controller/admin/destination.admin.controller.js';
import { addDestination_Domestic_Internationl } from '../controller/admin/destination.admin.controller.js';
import { getTNC, TNC } from '../controller/admin/termsAndCondition.admin.controller.js';
import {
  getPaymentMethod,
  paymentMethod,
} from '../controller/admin/paymentMode.admin.controller.js';
import {
  updateCancellationPolicy,
  getCancellationPolicy,
} from '../controller/admin/cancellation.admin.controller.js';
import { testimonialVideo } from '../controller/admin/testimonialVideo.admin.controller.js';
import {createItinerary} from '../controller/admin/itinaray.admin.controller.js'
import { heroSection } from '../controller/admin/heroSection.admin.controller.js';
const adminRoute = express.Router();

adminRoute.post('/add-user', auth, authorizeAdmin, AdminUserCreate);
adminRoute.post('/admin-login', AdminUserVerify);
adminRoute.get('/me', auth, getMe);
adminRoute.post('/logout', auth, logout);
adminRoute.post('/image-Gallery', auth, uploadMedia.array('image'), imageGallery);
adminRoute.get('/image-Gallery/:destination_name', auth, getImageForPlace);
adminRoute.get('/destination/:type', auth, destination_Internation_Or_Domestic);
adminRoute.patch('/change-password', auth, changePassword);
adminRoute.get('/get-admin-user', auth, authorizeAdmin, userExistedInAdmin);
adminRoute.post('/customer-gallery', auth, uploadMedia.array('image'), customerGallery);
adminRoute.post('/new-destination', auth, addDestination_Domestic_Internationl);
adminRoute.get('/TAC/:destination', auth, getTNC);
adminRoute.patch('/TAC', auth, TNC);
adminRoute.get('/payment-mode/:type', auth, getPaymentMethod);
adminRoute.post('/payment-mode', auth, paymentMethod);
adminRoute.get('/cancellation-policy', auth, getCancellationPolicy);
adminRoute.put('/cancellation-policy', auth, updateCancellationPolicy);
adminRoute.post('/testimonial-video', auth, uploadMedia.single('image'), testimonialVideo);
adminRoute.post('/itinerary',auth,uploadMedia.fields([
    { name: 'destination_images', maxCount: 10 },  // Handle up to 10 images
    { name: 'thumbnails', maxCount: 5 }            // Handle up to 5 thumbnails
  ]),createItinerary)
  adminRoute.post('/hero-section',uploadMedia.single('image'),heroSection)

export default adminRoute;
