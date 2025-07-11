import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  company_name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: true,
  },
  whatsapp: {
    type: Number,
    default: null,
  },
  facebook: {
    type: String,
    default: null,
  },
  instagram: {
    type: String,
    default: null,
  },
  youtube: {
    type: String,
    default: null,
  },
  location: {
    type: String,
    default: null,
  },
  your_requirements: {
    type: String,
    default: null,
  },
  your_photo: {
    type: String,
    default: null,
  },
  password: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    default: null,
  },
  preferred_language: {
    type: String,
    default: null,
  },
  role: {
    type: String,
    default: "user",
  },
  is_authorised: {
    type: Boolean,
    default: false,
  },
  is_publicly_present: {
    type: Boolean,
    default: false,
  },
  is_verified: {
    type: Boolean,
    default: false,
  },
  verification_date: {
    type: Date,
    default: null,
  },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

export default mongoose.model("User", UserSchema);
