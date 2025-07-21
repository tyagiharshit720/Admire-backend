import itinaray from '../../models/itinerary.model.js';

export const createItinerary = async (req, res) => {
  try {
    const {
      title,
      itinerary_visibility,
      itinerary_type,
      travel_type,
      destination_name,
      destination_theme,
      destination_category,
      duration,
      day_info,
      pricing,
      inclusion,
      exclusion,
      terms_and_condition,
      payment_mode,
    } = req.body;

    // Images handled via middleware, received as array of URLs:
    const destination_images = req.body.destination_images; // should be array of URLs
    const thumbnails = req.body.thumbnails; // should be array of URLs

    if (
      !title ||
      !itinerary_visibility ||
      !itinerary_type ||
      !travel_type ||
      !destination_name ||
      !destination_theme ||
      !destination_category ||
      !duration ||
      !day_info ||
      !destination_images ||
      !thumbnails ||
      !inclusion ||
      !exclusion ||
      !terms_and_condition ||
      !payment_mode
    ) {
      return res.status(400).json({ success: false, msg: 'All required fields must be provided.' });
    }

    const newItinerary = await itinaray.create({
      title,
      itinerary_visibility,
      itinerary_type,
      travel_type,
      destination_name,
      destination_theme: Array.isArray(destination_theme) ? destination_theme : [destination_theme],
      destination_category: Array.isArray(destination_category)
        ? destination_category
        : [destination_category],
      duration,
      day_info: day_info, // If sent as JSON string (from frontend)
      destination_images,
      thumbnails,
      pricing: pricing, // Handle optional pricing from frontend
      inclusion,
      exclusion,
      terms_and_condition,
      payment_mode,
    });

    res.status(201).json({
      success: true,
      msg: 'Itinerary created successfully.',
      data: newItinerary,
    });
  } catch (error) {
    console.error('Error creating itinerary:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while creating itinerary.',
      error: error.message,
    });
  }
};

export const getAllItinarary = async (req, res) => {
  try {

  } catch (error) {
    console.log(`Get Itinarary `);
  }
};
