import itineraryAdminUserModel from '../models/itineraryAdminUser.model.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils.js';

// temp 

// export const post=async (req,res)=>{
//   const {username, password}=req.body;
//   // const salt=bcrypt.salt(15)
//    const hashedPassword=await bcrypt.hash(password,10)
//   const newAdmin=new itineraryAdminUserModel({
//     username,password:hashedPassword,
//     role:'admin'
//   })
//   await newAdmin.save();
//   return res.status(200).json({msg:"Admin created", success:true})
// }

export const itineraryAdminUserVerify = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);
    if (!username || !password) {
      return res.status(400).json({ msg: 'username or password required', success: false });
    }
    const isUserExists = await itineraryAdminUserModel.findOne({ username });
    if (!isUserExists) {
      return res.status(400).json({ msg: 'User does not exists', success: false });
    }
    const matchedPaswword = bcrypt.compare(password, isUserExists.password);
    if (!matchedPaswword) {
      return res.status(401).json({ msg: 'Incorrect Password', success: false });
    }
    const token = generateToken(isUserExists._id, isUserExists.role);
    res.cookies('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
  } catch (error) {
    console.error(`itinerary Admin User -> ${error}`);
    return res.status(500).json({ msg: 'Server Pannel', success: false });
  }
};

export const itineraryAdminUserCreate = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || password) {
      return res.status(400).json({ msg: 'All fields are required', success: false });
    }
    const isUserExist = await itineraryAdminUserModel.findOne({ username });
    if (isUserExist) {
      return res.status(309).json({ msg: 'User Already Exist', success: false });
    }
    const newUser = new itineraryAdminUserModel({
      username,
      password,
      role: 'user',
    });
    await newUser.save();
    return res.status(200).json({ msg: 'user created successfull', msg: true });
  } catch (error) {
    console.error(`itinerary Admin user create -> ${error}`);
    return res.status(500).json({ msg: 'Server Error', success: false });
  }
};
