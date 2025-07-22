import destinatinInternationAndDomestic from '../../models/destinationInternationAndDomestic.model.js';
import { formatCountryName } from '../../utils.js';

// For sendind name of place according to their type "Domestic/International"
export const destination_Internation_Or_Domestic = async (req, res) => {
  const { type } = req.params;
  try {
    // console.log(type);
    if (!type) {
      return res.status(400).json({ msg: 'type is required', success: false });
    }

    const destinationType = await destinatinInternationAndDomestic.find({
      domestic_or_international: type,
    });
    // console.log(destinationType)
    if (!destinationType || destinationType.length == 0) {
      return res.status(409).json({ msg: 'destination type wontExists', success: false });
    }

    return res
      .status(200)
      .json({ msg: 'Successfully fetched', success: true, places: destinationType });
  } catch (error) {
    console.log(`Get Destination by type Error -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};

//Adding new destination
export const addDestination_Domestic_Internationl = async (req, res) => {
  try {
    const { destination_name, type, destination_theme } = req.body;
    console.log(destination_name, destination_theme, type);
    if (!destination_name || !type || !destination_theme) {
      return res.status(400).json({ msg: 'All the fields are required', success: false });
    }
    const alreadyExists = await destinatinInternationAndDomestic.find({
      destination_name: formatCountryName(destination_name),
    });
    console.log(alreadyExists);
    if (alreadyExists.length > 0) {
      return res.status(409).json({ msg: 'The given destination already exists', success: false });
    }
    const newDestination = new destinatinInternationAndDomestic({
      domestic_or_international: formatCountryName(type),
      destination_name: formatCountryName(destination_name),
      destination_theme: destination_theme,
    });
    await newDestination.save();
    return res.status(200).json({ msg: 'Destination created successfully', success: true });
  } catch (error) {
    console.log(`Add Destination and Domestic and Internationa ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
