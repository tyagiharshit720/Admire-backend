import itineraryModel from '../models/itinerary.model.js';

import destinationDetailsAndImagesModel from '../models/destinationDetailsAndImage.model.js';
import resortModel from '../models/resort.model.js';
import destinationInternationalAndDomesticModel from '../models/destinationInternationAndDomestic.model.js';
import imageGalleryModel from '../models/imageGallery.model.js';
import { formatCountryName } from '../utils.js';

// export const internationalDestinations = async (req, res) => {
//   try {
//     const internationalDestinations = await destinationInternationalAndDomesticModel.find({
//       domestic_or_international: 'international',
//     });
//     if (!internationalDestinations || internationalDestinations.length === 0) {
//       return res.status(404).json({ msg: 'No international destinations found', success: false });
//     }
//     return res.status(200).json(internationalDestinations, {
//       msg: 'International destinations fetched successfully',
//       success: true,
//     });
//   } catch (error) {
//     console.error('Error fetching international destinations:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
// export const domesticDestinations = async (req, res) => {
//   try {
//     const domesticDestinations = await destinationInternationalAndDomesticModel.find({
//       domestic_or_international: 'domestic',
//     });
//     if (!domesticDestinations || domesticDestinations.length === 0) {
//       return res.status(404).json({ msg: 'No domestic destinations found', success: false });
//     }
//     return res.status(200).json(domesticDestinations, {
//       msg: 'Domestic destinations fetched successfully',
//       success: true,
//     });
//   } catch (error) {
//     console.error('Error fetching domestic destinations:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };
// // trendingDestination controller
// export const trendingDestination = async (req, res) => {
//   try {
//     const data = await destinationDetailsAndImagesModel.find({
//       destination_type: {
//         $elemMatch: {
//           // Match any element in the array
//           $regex: /trending/i, // Match 'trending' in a case-insensitive manner
//         },
//       },
//     });
//     return res
//       .status(200)
//       .json(data, { msg: 'Trending destinations fetched successfully', success: true });
//   } catch (error) {
//     console.error('Error fetching trending destinations:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// export const destinationIteneries = async (req, res) => {
//   try {
//     const { place } = req.params;
//     const destinationItineries = await itineraryModel.find({
//       'selected_destination.value': {
//         $regex: new RegExp(place, 'i'), //
//       },
//     });
//     // console.log(destinationItineries.length);
//     if (!destinationItineries || destinationItineries.length === 0) {
//       return res
//         .status(404)
//         .json({ msg: 'No itineraries found for this destination', success: false });
//     }
//     return res.status(200).json(destinationItineries, {
//       msg: 'Destination itineraries fetched successfully',
//       success: true,
//     });
//   } catch (error) {
//     console.error('Error fetching destination itineraries:', error);
//     return res.status(500).json({ message: 'Internal Server Error', success: false });
//   }
// };

// // Adding Destination Domestic or International Controller

// export const ourResorts = async (req, res) => {
//   try {
//     const resortsData = await resortModel.find({});
//     if (!resortsData || resortsData.length === 0) {
//       return res.status(404).json({ msg: 'No resorts found', success: false });
//     }
//     if (resortsData) {
//       return res
//         .status(200)
//         .json(resortsData, { msg: 'Resorts fetched successfully', success: true });
//     }
//   } catch (error) {
//     console.error('Error fetching resorts:', error);
//     return res.status(500).json({ message: 'Internal Server Error', success: false });
//   }
// };
export const getImageGalleryByType = async (req, res) => {
  const { type } = req.params;

  try {
    const normalizedType = formatCountryName(type); // e.g., 'Domestic' or 'International'

    const result = await imageGalleryModel.aggregate([
      {
        $lookup: {
          from: 'destinationinternationanddomestics', // collection name (in lowercase and plural)
          localField: 'destination_id',
          foreignField: '_id',
          as: 'destinationData',
        },
      },
      {
        $unwind: {
          path: '$destinationData',
          preserveNullAndEmptyArrays: false,
        },
      },
      {
        $match: {
          'destinationData.domestic_or_international': {
            $regex: `^${normalizedType}$`,
            $options: 'i',
          }, // Match the type
        },
      },
      {
        $project: {
          _id: 1,
          destination_id: 1,
          image: 1,
          destination_name: '$destinationData.destination_name',
          destination_tye: '$destinationData.domestic_or_international',
        },
      },
    ]);

    if (!result || result.length === 0) {
      return res.status(401).json({ success: false, message: 'No data available' });
    }

    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error in getImageGalleryByType:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};

export const getItineraryByDestinationId = async (req, res) => {
  try {
    const { place } = req.params;
    console.log(place);

    if (!place) {
      return res.status(400).json({ success: false, message: 'Destination ID is required' });
    }

    const itineraries = await itineraryModel.find({
      selected_destination: place,
    }).populate('selected_destination');

    if (!itineraries || itineraries.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: 'No itineraries found for this destination' });
    }

    return res.status(200).json({ success: true, data: itineraries });
  } catch (error) {
    console.error('Error in getItineraryByDestinationId:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
