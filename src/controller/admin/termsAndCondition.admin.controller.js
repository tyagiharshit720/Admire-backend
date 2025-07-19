import destinatinInternationAndDomestic from '../../models/destinationInternationAndDomestic.model.js';
import { formatCountryName } from '../../utils.js';
// Controller function to get terms and conditions
export const getTNC = async (req, res) => {
  const { destination } = req.params;
  console.log(destination);

  try {
    const destinationData = await destinatinInternationAndDomestic.findOne({
      destination_name: formatCountryName(destination),
    });

    if (!destinationData) {
      return res.status(404).json({ msg: 'Destination not found', success: false });
    }

    return res.status(200).json({
      msg: 'Fetched terms and conditions',
      success: true,
      destinationData,
    });
  } catch (error) {
    console.error(`get_terms_and_condition -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};

export const TNC = async (req, res) => {
  const { destination_name, terms_and_conditions } = req.body;
  console.log(destination_name, terms_and_conditions);
  if (!destination_name) {
    return res.status(400).json({ msg: 'Destination name is required', success: false });
  }

  // const formatData = (destination_name);

  try {
    const destinationData = await destinatinInternationAndDomestic.findOne({
      destination_name: formatCountryName(destination_name),
    });
    if (!destinationData) {
      return res.status(400).json({ msg: 'The mentioned destination wont exists', success: false });
    }
    destinationData.terms_and_conditions = terms_and_conditions;
    await destinationData.save();
    return res.status(200).json({ msg: 'saved changes', success: true, destinationData });
  } catch (error) {
    console.error(`terms_and_condition -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
