import testimonialModel from '../models/testimonialVideos.model.js';

export const testimonal = async (req, res) => {
  try {
    const testimonalData = await testimonialModel.find();
    if (!testimonalData || testimonalData.length === 0) {
      return res.status(400).json({ msg: 'No testimonials found', success: false });
    }
    if (testimonalData) {
      return res
        .status(200)
        .json(testimonalData, { msg: 'Testimonials fetched successfully', success: true });
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return res.status(500).json({ message: 'Internal Server Error', success: false });
  }
};
