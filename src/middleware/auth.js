import jwt from 'jsonwebtoken'


export const auth=async(req, res, next)=>{
   try{
    const token=req.cookies.token;
    if(!token){
        return res.status(401).json({msg:" Unauthorized: No token", success:false})
    }

    const authorized=jwt.verify(token,process.env.JWT_SECRET)
    if(!authorized){
        return res.status(401).json({msg:"Unauthorized", success:false})
    }
    req.userId=authorized.user._id;
    next();
   }
   catch(error){
    console.error(`Auth middelware -> ${error}`)
    return res.status(500).json({msg:"Server Error", success:false});
   }
}