import imageGalleryModel from '../../models/imageGallery.model.js';
import { formatCountryName } from '../../utils.js';

// posting image on image Gallery
export const imageGallery = async (req, res) => {
  try {
    const { destination, termsAndCondition } = req.body;
    if (!destination) {
      return res.status(400).json({ msg: 'fields required', success: false });
    }

    const filePath = req.files.map((files) => files.path);
    // console.log(filePath);
    const isdestinationExists = await imageGalleryModel.findOne({
      destination_name: formatCountryName(destination),
    });
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
      destination_name: formatCountryName(destination),
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

// Getting image using name on place

export const getImageForPlace = async (req, res) => {
  const { destination_name } = req.params;
  try {
    if (!destination_name) {
      return res.status(400).json({ msg: 'destination name is rqeuired', success: false });
    }
    const imageGalleryData = await imageGalleryModel.findOne({
      destination_name: formatCountryName(destination_name),
    });
    // console.log(imageGalleryData);
    if (!imageGalleryData) {
      return res
        .status(409)
        .json({ msg: 'The image for the given destination not found', success: false });
    }
    return res
      .status(200)
      .json({
        msg: 'Image for the destination found successfully',
        success: true,
        imageGalleryData,
      });
  } catch (error) {
    console.log(`Post payment method Error ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
