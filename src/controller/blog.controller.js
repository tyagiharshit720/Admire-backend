import blogModel from '../models/blog.model.js';
export const blog = async (req, res) => {
  try {
    const data = await blogModel.find({});

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
