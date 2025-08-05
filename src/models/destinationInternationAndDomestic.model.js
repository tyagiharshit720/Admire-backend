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
  },
  { timestamps: true }
);

const DestinationInternationAndDomesticModel = mongoose.model(
  'DestinationInternationAndDomestic',
  DestinationInternationAndDomesticSchema
);

export default DestinationInternationAndDomesticModel;
