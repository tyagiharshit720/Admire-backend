import mongoose from 'mongoose';

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
    timestamps: true
  }
);

const VideoTestimonial = mongoose.model('VideoTestimonial', videoTestimonialSchema);

export default VideoTestimonial;
