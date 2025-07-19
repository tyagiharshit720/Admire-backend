import destinatinInternationAndDomestic from '../../models/destinationInternationAndDomestic.model.js';
// Controller function to get terms and conditions
export const getTPC = async (req, res) => {
  const { destination } = req.params;

  try {
    const destinationData = await destinatinInternationAndDomestic.findOne({
      destination_name: destination,
    });

    if (!destinationData) {
      return res.status(404).json({ msg: 'Destination not found', success: false });
    }

    return res.status(200).json({
      msg: 'Fetched terms and conditions',
      success: true,
      data: {
        terms_and_conditions: destinationData.terms_and_conditions,
        cancellation_policy: destinationData.cancellation_policy,
        payment_method: destinationData.payment_method,
      },
    });
  } catch (error) {
    console.error(`get_terms_and_condition -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};

export const TPC = async (req, res) => {
  const { destination_name, terms_and_conditions, cancellation_policy, payment_method } = req.body;
    console.log(destination_name,terms_and_conditions);
  if (!destination_name) {
    return res.status(400).json({ msg: 'Destination name is required', success: false });
  }

  try {
    // ✅ Prepare dynamic update object
    const updateFields = {};

    if (terms_and_conditions !== undefined) {
      updateFields.terms_and_conditions = terms_and_conditions;
    }
    if (cancellation_policy !== undefined) {
      updateFields.cancellation_policy = cancellation_policy;
    }
    if (payment_method !== undefined) {
      updateFields.payment_method = payment_method;
    }

    // ✅ Perform update and get latest updated document
    const updatedDestination = await destinatinInternationAndDomestic.findOneAndUpdate(
      { destination_name },
      { $set: updateFields },
      { new: true }  // return updated document
    );

    if (!updatedDestination) {
      return res.status(404).json({ msg: 'Destination not found', success: false });
    }

    return res.status(200).json({
      msg: 'Updated successfully',
      success: true,
      data: updatedDestination,
    });

  } catch (error) {
    console.error(`terms_and_condition -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
