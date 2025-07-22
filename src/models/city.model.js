import mongoose from 'mongoose'


const citySchema=new mongoose.Schema({
    city_name:{
        type:String,
        required:true
    },
    city_category:{
        type:[String],
        required:true,
    },
    city_image:{
        type:[String],
        required:true
    },
    visibiliy:{
       type:String,
       enum:['public', 'private'],
       required:true
    },
    state:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'DestinationInternationAndDomestic'
    }
},{timestamps:true})