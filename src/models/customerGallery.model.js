import mongoose from 'mongoose';

const customerGallerySchema=new mongoose.Schema({
    image:{
        type:[String],
        require:true
    }
});

const customerGalleryModel =mongoose.model('customer-galler', customerGallerySchema);
export default customerGalleryModel;