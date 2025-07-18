import express from 'express';
// import { post } from '../controller/itineraryAdminUser.controller.js';
import { authorizeAdmin, auth } from '../middleware/auth.js';
import uploadMedia from '../middleware/mediaUploads.js';
import { imageGallery } from '../controller/admin/imageGallery.controller.js';
import {
  AdminUserVerify,
  AdminUserCreate,
  changePassword,
  userExistedInAdmin,
  getMe,
} from '../controller/admin/user.admin.controller.js';
import { destination_Internation_Or_Domestic } from '../controller/admin/destination.admin.controller.js';
const adminRoute = express.Router();

adminRoute.post('/add-user', auth, authorizeAdmin, AdminUserCreate);
adminRoute.post('/admin-login', AdminUserVerify);
// adminRoute.post('/admin-logout',logout)
adminRoute.post('/image-Gallery', uploadMedia.array('image'), imageGallery);
adminRoute.get('/destination/:type', destination_Internation_Or_Domestic);
adminRoute.patch('/change-password', auth, changePassword);
adminRoute.get('/get-admin-user',auth, authorizeAdmin, userExistedInAdmin);
adminRoute.get('/me',auth,getMe)

export default adminRoute;
