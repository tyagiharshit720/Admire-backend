import mongoose from 'mongoose';

const DestinationInternationAndDomesticSchema = new mongoose.Schema(
  {
    domestic_or_international: {
      type: String,
      required: true,
    },
    destination_name: {
      type: String,
      required: true,
    },

    // ✅ New Fields
    terms_and_conditions: {
      type: String, // Or [String] if multiple
      default: '', // Optional: default value
    },
  },
  { timestamps: true }
);

const DestinationInternationAndDomesticModel = mongoose.model(
  'DestinationInternationAndDomestic',
  DestinationInternationAndDomesticSchema
);

export default DestinationInternationAndDomesticModel;
