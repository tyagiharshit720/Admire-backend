import heroSectionVideoModel from '../../models/heroSection.model.js';
import { formatCountryName } from '../../utils.js';

// Creating new Hero Section video
export const heroSection = async (req, res) => {
  // console.log(req)
  // console.log(req.file.path);
  try {
    const { title, visibility } = req.body;
    console.log(title,visibility)
    
    if (!title) {
      return res.status(400).json({ msg: 'Title Field Required', success: false });
    }
    const titleAlreadyExists = await heroSectionVideoModel.findOne({
      title: formatCountryName(title),
    });
    if (titleAlreadyExists) {
      titleAlreadyExists.video_url = [
        ...titleAlreadyExists.video_url,
        {
          url: req.file.path,
          visibility:formatCountryName(visibility),
        },
      ];
      await titleAlreadyExists.save();
      return res.status(200).json({ msg: 'Hero video saved', success: true, titleAlreadyExists });
    }
    const newHeroVideo = new heroSectionVideoModel({
      title: formatCountryName(title),
      video_url: [
        {
          url: req.file.path,
          visibility:formatCountryName(visibility),
        },
      ],
    });
    await newHeroVideo.save();
    return res.status(200).json({ msg: 'Hero video saved', success: true, newHeroVideo });
  } catch (error) {
    console.log(`Admin Hero Section -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};

// Right Now it is geeting all the Hero video from the DataBase but in future if needed we optimize it
export const getAllHeroVideo=async(req,res)=>{
  try{
    const heroVideoData=await heroSectionVideoModel.find();
    if(!heroVideoData || heroVideoData.length===0){
      return res.status(404).json({msg:"No Data available", success:false});
    }
    return res.status(200).json({msg:"Success Fatched", success:true, heroVideoData})
  }
  catch(error){
    console.log(`Get All the Hero video error ${error}`);
    return res.status(500).json({msg:"Server Error", success:false});
  }
}

// Update Hero Section Video

export const updateHeroVideo=async(req,res)=>{
  const {title, visibility}=req.body;
  const {id}=req.params
  try{
    const HeroVideoData=await heroSectionVideoModel.findById(id);
    if(!HeroVideoData){
      return res.status(404).json({msg:"The Data wont exists ", success:false});
    }
    if(title){
      HeroVideoData.title=title;
    }
    if(visibility){
      HeroVideoData.video_url.visibility=formatCountryName(visibility);
    }
    if(req.file.path){
      HeroVideoData.video_url.url=req.file.path
    }
    await HeroVideoData.save();
    return res.statsu(200).json({msg:"Updated Successfully", success:false});
  }
  catch(error){
    console.log(`Update Hero Video Error ${error}`)
    return res.status(500).json({msg:"Server Error", success:false});
  }
}

export const deleteHeroVideo=async(req,res)=>{
  const {id}=req.params;
  try{

  }
  catch(error){
    console.log(`Delete Hero video Error ${error}`);
    return res.status(500).json({msg:"Server error", success:false});
  }
}
