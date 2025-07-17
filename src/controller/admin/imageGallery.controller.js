import imageGalleryModel from '../../models/imageGallery.model.js';

export const imageGallery = async (req, res) => {
  try {
    const { destination, termsAndCondition } = req.body;
    if (!destination) {
      return res.status(400).json({ msg: 'fields required', success: false });
    }

    const filePath = req.files.map((files) => files.path);
    // console.log(filePath);
    const isdestinationExists = await imageGalleryModel.findOne({ destination_name: destination });
    // console.log(isdestinationExists);
    if (isdestinationExists) {
      isdestinationExists.image = [...isdestinationExists.image, ...filePath];
      if (termsAndCondition) {
        isdestinationExists.termsAndCondition = termsAndCondition;
      }
      await isdestinationExists.save();
      return res.status(200).json({ msg: 'images are uploaded successfully', success: true });
    }

    const newImageGallery = new imageGalleryModel({
      destination_name: destination,
      image: filePath,
      termsAndCondition,
    });

    await newImageGallery.save();
    return res.status(200).json({ msg: 'Image uploaded successfully', success: true });
  } catch (error) {
    console.log(`Image Gallery -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
