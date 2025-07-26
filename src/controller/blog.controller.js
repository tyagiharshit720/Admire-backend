import blogModel from '../models/blog.model.js';
export const getBlog = async (req, res) => {
  try {
    const blogData = await blogModel.find();
    if(!blogData || blogData.length === 0){
      return res.status(404).json({msg:"No Blogs Aialable", success:false});
    }
    return res.status(200).json({msg:"Successfully fetched", success:true, blogData});

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
