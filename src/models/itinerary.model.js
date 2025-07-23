import mongoose from 'mongoose';

// Sub-schema for days_information
const dayInfoSchema = new mongoose.Schema({
  day: { type: String, trim: true },
  locationName: { type: String, trim: true },
  locationDetail: { type: String, trim: true },
}, { _id: false });

// Main schema
const itinerarySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  travel_type: {
    type: String,
    enum: ['domestic', 'International'],
    required: true,
    trim: true,
  },
  itinerary_visibility: {
    type: String,
    enum: ['public', 'private'],
    required: true,
  },
  itinerary_type: {
    type: String,
    enum: ['fixed', 'flexible'],
    required: true,
  },
  cancellation_policy: {
    type: String,
    required: true,
    trim: true,
  },
  classification: {
    type: [String],
    required: true,
  },
  days_information: {
    type: [dayInfoSchema],
    required: true,
  },
  destination_detail: {
    type: String,
    required: true,
    trim: true,
  },
  destination_images: {
    type: [String],
    required: true,
  },
  destination_thumbnails: {
    type: [String],
    required: true,
  },
  destination_video: {
    type: String, // Store the Cloudinary video URL
    // required: true,
    trim: true,
  },
  discount: {
    type: String,
    // required: true,
    trim: true,
  },
  duration: {
    type: String,
    required: true,
    trim: true,
  },
  exclusion: {
    type: String,
    required: true,
    trim: true,
  },
  hotel_as_per_category: {
    type: String,
    required: true,
    trim: true,
  },
  inclusion: {
    type: String,
    required: true,
    trim: true,
  },
  itinerary_theme: {
    type: [String],
    required: true,
  },
  payment_mode: {
    type: String,
    required: true,
    trim: true,
  },
  pricing: {
    type: String,
    // required: true,
    trim: true,
  },
  selected_destination: {
    type: String,
    required: true,
    trim: true,
  },
  terms_and_conditions: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('ItineraryMain', itinerarySchema);
