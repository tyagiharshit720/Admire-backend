import blogModel from '../../models/blog.model.js'
import { formatCountryName } from '../../utils.js';

export const postBlog=async(req,res)=>{
    const {title,content,visibility}=req.body
    // console.log(title,content,visibility);
    try{
      if(!title || !content || !visibility){
        return res.status(400).json({msg:"All the fileds are required", success:false});
      }
      const newBlog=new blogModel({
        title,content,visibility:formatCountryName(visibility),
        cover_image:req.file.path
      })
      await newBlog.save()
      return res.status(200).json({msg:"Blog created successfully", success:true});
    }
    catch(error){
        console.log(`Create blog error ${error}`);
        return res.status(500).json({msg:"Server Error", success:false})
    }
}

export const getBlog=async(req,res)=>{
    try{
      const blogData=await blogModel.find({visibility:'Public'})
    //   console.log(blogData)
      if(!blogData || blogData.length === 0){
        return res.status(409).json({msg:"Either there is no Data or there few error", success:false});
      }
      return res.status(200).json({msg:"Successfully Fetched", success:true, blogData});
    }
    catch(error){
        console.log(`Get Blog Error ${error}`);
        return res.status({msg:"Server Error", success:false})
    }
}