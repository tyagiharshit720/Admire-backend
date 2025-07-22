import customerGalleryModel from '../../models/customerGallery.model.js';

export const customerGallery = async (req, res) => {
  // console.log(req);
  try {
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ msg: 'Atleast one image is needed', success: false });
    }
    const imagesPath = req.files.map((files) => files.path);
    const galleryDB = await customerGalleryModel.findOne();
    if (!galleryDB) {
      const newGallery = new customerGalleryModel({
        image: imagesPath,
      });
      await newGallery.save();
      return res.status(200).json({ msg: 'images uploaded Successfully', success: true });
    }
    galleryDB.image = [...galleryDB.image, ...imagesPath];
    await galleryDB.save();
    return res.status(200).json({ msg: 'images uploaded Successfully', success: true });
  } catch (error) {
    console.log(`customerGallery -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
