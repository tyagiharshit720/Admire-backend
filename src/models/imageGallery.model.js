import mongoose from 'mongoose';

const imageGalleryScheam = new mongoose.Schema({
  destination_name: {
    type: String,
    unique: true,
    required: true,
  },
  image: [String],
  termsAndCondition: String,
});

const imageGalleryModel = mongoose.model('image_Gallery', imageGalleryScheam);
export default imageGalleryModel;
