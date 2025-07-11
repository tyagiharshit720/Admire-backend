import mongoose from 'mongoose';

// models/videoTestimonial.model.js

const videoTestimonialSchema = new mongoose.Schema(
  {
    video_url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    visibility: {
      type: String,
      enum: ['public', 'private'],
      default: 'public',
    },
  },
  {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  }
);

const VideoTestimonial = mongoose.model('VideoTestimonial', videoTestimonialSchema);

export default VideoTestimonial;