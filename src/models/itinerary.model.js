import mongoose from 'mongoose';

// Sub-schema for days information
const dayInfoSchema = new mongoose.Schema({
  day: { type: String, trim: true },
  locationName: { type: String, trim: true },
  locationDetail: { type: String, trim: true },
}, { _id: false });

// Sub-schema for pricing details
const pricingSchema = new mongoose.Schema({
  standard_price: { type: String, trim: true },
  discount: { type: String, trim: true },
}, { _id: false });

const itinerarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
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
    travel_type: {
      type: String,
      enum: ['domestic', 'International'],
      required: true,
      trim: true,
    },
    destination_name: {
      type: String,
      required: true,
      trim: true,
    },
    destination_theme: {
      type: [String],
      required: true,
    },
    destination_category: {
      type: [String],
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    day_info: {
      type: [dayInfoSchema],
      required: true,
    },
    destination_images: {
      type: [String],
      required: true,
    },
    thumbnails: {
      type: [String],
      required: true,
    },
    pricing: {
      type: pricingSchema,
      default: {},
    },
    inclusion: {
      type: String,
      required: true,
      trim: true,
    },
    exclusion: {
      type: String,
      required: true,
      trim: true,
    },
    terms_and_condition: {
      type: String,
      required: true,
      trim: true,
    },
    payment_mode: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('ItineraryMain', itinerarySchema);
