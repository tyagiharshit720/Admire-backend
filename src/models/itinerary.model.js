import mongoose from 'mongoose';

// Sub-schema for hotel details
const hotelDetailSchema = new mongoose.Schema(
  {
    type: String,
    roomType: String,
    price: String,
    discount: String,
  },
  { _id: false }
);

// Sub-schema for itinerary theme (value-label pairs)
const labelValueSchema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    label: { type: String, required: true },
  },
  { _id: false }
);

// Sub-schema for days information
const dayInfoSchema = new mongoose.Schema(
  {
    day: String,
    locationName: String,
    locationDetail: String,
  },
  { _id: false }
);

const itinerarySchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', // assuming a User model exists
    },

    title: { type: String, required: true },
    meta_title: String,
    keyword: String,
    meta_description: String,

    itinerary_visibility: {
      type: String,
      enum: ['public', 'private', 'draft'],
      default: 'public',
    },

    itinerary_type: {
      type: String,
      enum: ['fixed', 'flexible'],
      default: 'flexible',
    },

    duration: {
      type: labelValueSchema,
      default: undefined,
    },

    selected_destination: {
      type: labelValueSchema,
      default: undefined,
    },

    itinerary_theme: {
      type: [labelValueSchema],
      default: [],
    },

    days_information: {
      type: [dayInfoSchema],
      default: [],
    },

    hotel_details: {
      type: [hotelDetailSchema],
      default: [],
    },

    destination_detail: String,
    inclusion: String,
    exclusion: String,
    terms_and_conditions: String,
    pricing: String,

    destination_thumbnail: String,

    destination_images: {
      type: [String],
      default: [],
    },

    created_at: {
      type: Date,
      default: Date.now,
    },
    updated_at: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: false } // set to true if you want Mongoose to auto-manage timestamps
);

export default mongoose.model('ItineraryMain', itinerarySchema);
