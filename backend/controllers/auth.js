import jwt, { decode } from "jsonwebtoken"
import { User } from "../model/User.js"
export const isauthenticated=async(req,res,next)=>{
try {
    const token= await req.headers?.Authorization;
    if(!token){
        return res.status(400).json({
            success:true,
            message:"Login to access this admin feature"
        })
    }
    const decoded=await jwt.verify(token,process.env.JWT_SECRET);
    const user=await User.findById(decoded._id);
    req.user=user;
    next();
} catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
    })
}
}
