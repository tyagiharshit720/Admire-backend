import itineraryModel from '../../models/itinerary.model.js';

export const createItinerary = async (req, res) => {
  try {
    const {
      title,
      travel_type,
      itinerary_visibility,
      itinerary_type,
      cancellation_policy,
      classification,
      days_information,
      destination_detail,
      destination_images,
      destination_thumbnails,
      discount,
      duration,
      exclusion,
      hotel_as_per_category,
      inclusion,
      itinerary_theme,
      payment_mode,
      pricing,
      selected_destination,
      terms_and_conditions,
    } = req.body;

    console.log('Received Itinerary Data:', {
      title,
      travel_type,
      itinerary_visibility,
      itinerary_type,
      cancellation_policy,
      classification,
      days_information,
      destination_detail,
      destination_images,
      destination_thumbnails,
      // destination_video,
      discount,
      duration,
      exclusion,
      hotel_as_per_category,
      inclusion,
      itinerary_theme,
      payment_mode,
      pricing,
      selected_destination,
      terms_and_conditions,
    });

    // Destination video URL from Cloudinary upload
    const destination_video = req.file?.path;
    console.log(req.file);
    console.log(destination_video);

    // Validate required fields
    if (
      !title ||
      !travel_type ||
      !itinerary_visibility ||
      !itinerary_type ||
      !cancellation_policy ||
      !classification ||
      !days_information ||
      !destination_detail ||
      !destination_images ||
      !destination_thumbnails ||
      !discount ||
      !duration ||
      !exclusion ||
      !hotel_as_per_category ||
      !inclusion ||
      !itinerary_theme ||
      !payment_mode ||
      !pricing ||
      !selected_destination ||
      !terms_and_conditions
    ) {
      return res.status(400).json({
        success: false,
        msg: 'All required fields must be provided.',
      });
    }

    const newItinerary = await itineraryModel.create({
      title,
      travel_type,
      itinerary_visibility,
      itinerary_type,
      cancellation_policy,
      classification: Array.isArray(classification) ? classification : [classification],
      days_information: Array.isArray(days_information)
        ? days_information
        : JSON.parse(days_information),
      destination_detail,
      destination_images: Array.isArray(destination_images)
        ? destination_images
        : JSON.parse(destination_images),
      destination_thumbnails: Array.isArray(destination_thumbnails)
        ? destination_thumbnails
        : JSON.parse(destination_thumbnails),
      destination_video,
      discount,
      duration,
      exclusion,
      hotel_as_per_category,
      inclusion,
      itinerary_theme: Array.isArray(itinerary_theme) ? itinerary_theme : [itinerary_theme],
      payment_mode,
      pricing,
      selected_destination,
      terms_and_conditions,
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
      msg: 'Server error while creating itinerary.',
      error: error.message,
    });
  }
};

export const getAllItinerary = async (req, res) => {
  try {
    const data = await itineraryModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Get Itinerary error:', error);
    res
      .status(500)
      .json({ success: false, msg: 'Failed to fetch itineraries', error: error.message });
  }
};
