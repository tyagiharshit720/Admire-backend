import PlanYourJourney from '../models/planYourJuorney.model.js';
import contactModel from '../models/contact.model.js';
import subscribeModel from '../models/subscribe.model.js';

export const planYourJourney = async (req, res) => {
  // console.log("test")
  const { name, email, phone, destination } = req.body;
  // console.log(req.body.name);
  // console.log(req.body)

  console.log(req.body);
  try {
    if (!name || !email || !phone || !destination) {
      res.status(400).json({ msg: 'Please fill all the fields', success: false });
    }
    if (name.length < 3) {
      res.status(400).json({
        msg: 'Name must be at least 3 characters long',
        success: false,
      });
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      res.status(400).json({ msg: 'Name must contain only letters', success: false });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      res.status(400).json({ msg: 'Please enter a valid email address', success: false });
    }
    if (!/^\d{10}$/.test(phone)) {
      res.status(400).json({ msg: 'Phone number must be 10 digits long', success: false });
    }
    if (destination.length < 3) {
      res.status(400).json({
        msg: 'Destination must be at least 3 characters long',
        success: false,
      });
    }
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

export const contact = async (req, res) => {
  const { name, email, subject, message } = req.body;
  // console.log(req.body)
  try {
    if (!name || !email || !subject || !message) {
      res.status(400).json({ msg: 'Please fill all the fields', success: false });
    }
    if (name.length < 3) {
      res.status(400).json({
        msg: 'Name must be at least 3 characters long',
        success: false,
      });
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      res.status(400).json({ msg: 'Name must contain only letters', success: false });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      res.status(400).json({ msg: 'Please enter a valid email address', success: false });
    }
    if (subject.length < 3) {
      res.status(400).json({
        msg: 'Subject must be at least 3 characters long',
        success: false,
      });
    }
    if (message.length < 10) {
      res.status(400).json({
        msg: 'Message must be at least 10 characters long',
        success: false,
      });
    }

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

export const subscribe = async (req, res) => {
  const { name, phone, email } = req.body;
  console.log(req.body);
  try {
    if (!name || !phone || !email) {
      return res.status(400).json({ msg: 'Please fill all the fields', success: false });
    }
    if (name.length <= 1) {
      return res.status(400).json({
        msg: 'Name must be at least 3 characters long',
        success: false,
      });
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return res.status(400).json({ msg: 'Name must contain only letters', success: false });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ msg: 'Please enter a valid email address', success: false });
    }

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

export const suggestionComplain = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    if (!name || !email || !message) {
      return res.status(400).json({ msg: 'Please fill all the fields', success: false });
    }
    if (name.length < 2) {
      return res.status(400).json({
        msg: 'Name must be at least 3 characters long',
        success: false,
      });
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      return res.status(400).json({ msg: 'Name must contain only letters', success: false });
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ msg: 'Please enter a valid email address', success: false });
    }

    const newSuggestionComplain = new suggestionComplainModel({
      nema,
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
