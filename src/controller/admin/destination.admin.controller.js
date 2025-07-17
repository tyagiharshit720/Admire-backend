import destinatinInternationAndDomestic from '../../models/destinationInternationAndDomestic.model.js';

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
