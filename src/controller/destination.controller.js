// import usePrams from "use-params";
import itineraryModel from "../models/itinerary.model.js";




export const itineraries = async (req, res) => {
  try {
    const data = await itineraryModel.find({});

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching itineraries:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }

};
