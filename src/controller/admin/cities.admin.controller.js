import cityModel from '../../models/city.model.js';
import DestinationInternationAndDomesticModel from '../../models/destinationInternationAndDomestic.model.js';
import mongoose from 'mongoose'
import { formatCountryName } from '../../utils.js';

export const createCity = async (req, res) => {
  const { city_name, city_category,  visibility, id } = req.body;

  try {
    // 1. Validate required fields
    if (!city_name || !city_category || ! visibility || !id) {
      return res.status(400).json({ msg: 'All the fields are required', success: false });
    }

    // 2. Check if city already exists
    const formattedName = formatCountryName(city_name);
    const cityExists = await cityModel.findOne({ city_name: formattedName });
    if (cityExists) {
      return res.status(401).json({ msg: 'The city already exists', success: false });
    }

    // 3. Map uploaded images
    const imagesPath = req.files.map((file) => file.path);

    // 4. Create new city and link it to the destination/state
    const newCity = new cityModel({
      city_name: formattedName,
      city_category: Array.isArray(city_category) ? city_category : [city_category],
       visibility:formatCountryName(visibility),
      city_image: imagesPath,
      state: id, // 👈 id of the tabel
    });

    await newCity.save();

    return res.status(201).json({ msg: 'City created successfully', success: true, data: newCity });
  } catch (error) {
    console.log(`post city -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};

export const getCity=async(req,res)=>{
  const {destinationId}=req.params
  console.log(destinationId);
  try{
     const objectId = new mongoose.Types.ObjectId(destinationId);
    const citiesData=await cityModel.find({state:objectId});
    console.log(citiesData)
    if(!citiesData || citiesData.length == 0){
      return res.status(409).json({msg:"No cities Availabe", success:false});
    }
    return res.status(200).json({msg:"successfully fetched", success:true, citiesData});
  }
  catch(error){
    console.log(`Get cities Error -> ${error}`);
    return res.status(500).json({msg:"Server Error", success:false})
  }

}
