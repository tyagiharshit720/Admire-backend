import mongoose from 'mongoose';

// Sub-schema for hotel details
const hotelDetailSchema = new mongoose.Schema(
  {
    type: { type: String, trim: true },
    roomType: { type: String, trim: true },
    price: { type: String, trim: true },
    discount: { type: String, trim: true },
  },
  { _id: false }
);

// Sub-schema for itinerary theme (value-label pairs)
const labelValueSchema = new mongoose.Schema(
  {
    value: { type: String, required: true, trim: true },
    label: { type: String, required: true, trim: true },
  },
  { _id: false }
);

// Sub-schema for days information
const dayInfoSchema = new mongoose.Schema(
  {
    day: { type: String, trim: true },
    locationName: { type: String, trim: true },
    locationDetail: { type: String, trim: true },
  },
  { _id: false }
);

const itinerarySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    travel_type: {
      type: String,
      enum: ['Domestic', 'International'],
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
    destination_thumbnail: {
      type: [String],
      required: true,
    },
    duration: {
      type: [dayInfoSchema],
      required: true,
    },
    media: {
      type: [String],
      required: true,
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
  { timestamps: true }  // Track createdAt and updatedAt automatically
);

export default mongoose.model('ItineraryMain', itinerarySchema);
