import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  id: Number,
  user_id: mongoose.Types.ObjectId,
  blog_title: String,
  blog_slug: String,
  blog_description: String,
  blog_author_name: { type: String, default: null },
  blog_category: String,
  blog_visibility: { type: String, default: "public" },
  blog_content: String,
  blog_image: String,
  blog_image_alt_text: String,
  blog_images: { type: String, default: null }, // Change to [String] if parsing JSON
  blog_meta_title: String,
  blog_meta_description: String,
  blog_meta_keywords: String,
  created_at: { type: Date, default: null },
  updated_at: { type: Date, default: null },
});

export default mongoose.model("Blog", blogSchema);
