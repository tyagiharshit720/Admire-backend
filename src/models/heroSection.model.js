import mongoose from 'mongoose'

const heroSectionVideoSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    video_url:{
        type:String,
        required:true,
    }
},{timestamps:true});

const heroSectionVideoModel=mongoose.model('Hero-Section',heroSectionVideoSchema);

export default heroSectionVideoModel;