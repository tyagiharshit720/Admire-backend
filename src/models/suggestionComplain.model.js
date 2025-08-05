import mongoose from 'mongoose';

const suggestionComplain = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{timestamps:true});
const suggestionComplainModel = mongoose.model('suggestionComplain', suggestionComplain);

export default suggestionComplainModel;
