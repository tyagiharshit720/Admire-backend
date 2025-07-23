import heroSectionVideoModel from '../../models/heroSection.model.js';
import { formatCountryName } from '../../utils.js';

export const heroSection = async (req, res) => {
  console.log(req)
  console.log(req.file.path);
  try {
    const { title, visibility } = req.body;
    
    if (!title) {
      return res.status(400).json({ msg: 'Title Field Required', success: false });
    }
    const titleAlreadyExists = await heroSectionVideoModel.findOne({
      title: formatCountryName(title),
    });
    if (titleAlreadyExists) {
      titleAlreadyExists.video_url = [
        ...titleAlreadyExists.video_url,
        {
          url: req.file.path,
          visibility:formatCountryName(visibility),
        },
      ];
      await titleAlreadyExists.save();
      return res.status(200).json({ msg: 'Hero video saved', success: true, titleAlreadyExists });
    }
    const newHeroVideo = new heroSectionVideoModel({
      title: formatCountryName(title),
      video_url: [
        {
          url: req.file.path,
          visibility:formatCountryName(visibility),
        },
      ],
    });
    await newHeroVideo.save();
    return res.status(200).json({ msg: 'Hero video saved', success: true, newHeroVideo });
  } catch (error) {
    console.log(`Admin Hero Section -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
