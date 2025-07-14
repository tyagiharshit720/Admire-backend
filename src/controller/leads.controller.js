import PlanYourJourney from '../models/planYourJuorney.model.js';
import contactModel from '../models/contact.model.js';
import subscribeModel from '../models/subscribe.model.js';

// planYourJourney controller
export const planYourJourney = async (req, res) => {
  const { name, email, phone, destination } = req.body;

  console.log(req.body);
  try {
    const planYourJourney = new PlanYourJourney({
      name,
      email,
      phone,
      destination,
    });
    await planYourJourney.save();
    res.status(201).json({
      msg: 'Plan Your Journey request submitted successfully',
      success: true,
      data: planYourJourney,
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
      success: false,
    });
  }
};

// conatct controller
export const contact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  // console.log(req.body)
  try {
    const newContcat = new contactModel({
      name,
      email,
      subject,
      message,
    });
    await newContcat.save();

    // Save contact request logic here
    res.status(201).json({
      msg: 'Contact request submitted successfully',
      success: true,
      data: { name, email, subject, message },
    });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
      success: false,
    });
  }
};

// subscribe controller

export const subscribe = async (req, res) => {
  const { name, phone, email } = req.body;
  console.log(req.body);
  try {
    const newSubscribe = new subscribeModel({
      name,
      phone,
      email,
    });
    await newSubscribe.save();
    res.status(201).json({ msg: 'Successfully Subscribed', success: true });
  } catch (error) {
    res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
      success: false,
    });
  }
};

// suggestionComplain controller
export const suggestionComplain = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newSuggestionComplain = new suggestionComplainModel({
      name,
      email,
      message,
    });
    await newSuggestionComplain.save();
    return res.status(201).json({
      msg: 'Suggestion or Complaint submitted successfully',
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      msg: 'Internal Server Error',
      error: error.message,
      success: false,
    });
  }
};
