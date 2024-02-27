import { User } from "../model/User.js"
import jwt from "jsonwebtoken"
import { Sendmail } from "./sendmail.js";
import cloudinary from "cloudinary"     // for uploading images
export const login=async(req,res)=>{
try {
    const {email,password}=req.body;
const usr=await User.findOne({email,password});
if(!usr){
    return res.status(400).json({
        success:false,
        message:"Invalid mail or password",
    });
}
const token=jwt.sign({_id:usr._id},process.env.JWT_SECRET);
res.status(200).cookie("token",token,{
    expires:new Date(Date.now()+600000),
    httpOnly:true,
}).json({
    success:true,
    message:"Logged in successfully"
});
} catch (error) {
    return res.status(400).json({
        success:false,
        message:error.message
    })
}
}
export const logout=async(req,res)=>{
    try {
    res.status(200).cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    }).json({
        success:true,
        message:"Logged Out successfully"
    });
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  getUser=async(req,res)=>{
    try {
        const usr=await User.findOne().select("-email -password");
        res.status(200).json({
            success:true,
            usr,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  myprofile=async(req,res)=>{
    try {
        const usr=await User.findById(req.user._id);
        res.status(200).json({
            success:true,
            usr,
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  contact=async(req,res)=>{
    try {
      const {name,email,message}=req.body;
      const usrmsg=`hey I am ${name} , My email is ${email},My message is ${message}`
      await Sendmail(usrmsg);
      return res.status(200).json({
        success:true,
        message:"Message sent successfully"
      })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  updateuser=async(req,res)=>{
    try {
        const usr=await User.findById(req.user._id);
        const {name,email,password,skills,about}=req.body;
        if(name){
            usr.name=name;
        }
        if(email){
            usr.email=email;
        }
        if(password){
            usr.password=password;
        }
        if(skills){
       if(skills.image1){
        await cloudinary.v2.uploader.destroy(usr.skills.image1.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image1,{folder:"portfolio"}
        );
        usr.skills.image1={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
       if(skills.image2){
        await cloudinary.v2.uploader.destroy(usr.skills.image2.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image2,{folder:"portfolio"}
        );
        usr.skills.image2={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
       if(skills.image3){
        await cloudinary.v2.uploader.destroy(usr.skills.image3.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image3,{folder:"portfolio"}
        );
        usr.skills.image3={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
       if(skills.image4){
        await cloudinary.v2.uploader.destroy(usr.skills.image4.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image4,{folder:"portfolio"}
        );
        usr.skills.image4={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
       if(skills.image5){
        await cloudinary.v2.uploader.destroy(usr.skills.image5.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image5,{folder:"portfolio"}
        );
        usr.skills.image5={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
       if(skills.image6){
        await cloudinary.v2.uploader.destroy(usr.skills.image6.public_id);
        const mycloud=await cloudinary.v2.uploader.upload(
            skills.image6,{folder:"portfolio"}
        );
        usr.skills.image6={
            public_id:mycloud.public_id,
            url:mycloud.secure_url
        }
       }
        }
        if(about){
            if(about.name){
            usr.about.name=about.name;}
            if(about.title){
            usr.about.title=about.title;}
            if(about.subtitle){
            usr.about.subtitle=about.subtitle;}
            if(about.description){
            usr.about.description=about.description;}
            if(about.qoute){
            usr.about.qoute=about.qoute;}
            if(about.avatar){
                await cloudinary.v2.uploader.destroy(usr.about.avatar.public_id);
                const mycloud=await cloudinary.v2.uploader.upload(about.avatar,{
                    folder:"portfolio",
                });
                usr.about.avatar={
                    public_id:mycloud.public_id,
                    url:mycloud.secure_url,
                }
            }
        }
        await usr.save();
        res.status(200).json({
            success:true,
            message:"user updated successfully"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  addtimeline=async(req,res)=>{
    try {
        const {title,description,date}=req.body;
        const usr=await User.findById(req.user._id);
        usr.timeline.unshift({
            title,
            description,
            date
        })
        await usr.save();
        res.status(200).json({
            success:true,
            message:"added to timeline"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const  addproject=async(req,res)=>{
    try {
        const {url,title,image,description,technologies}=req.body;
        const usr=await User.findById(req.user._id);
        const mycloud=await cloudinary.v2.uploader.upload(image,{
            folder:"portfolio",
        });
        usr.projects.unshift({
            url,
            title,
            image:{
        public_id:mycloud.public_id,
        url:mycloud.secure_url,
            },
            description,
            technologies
        })
        await usr.save();
        res.status(200).json({
            success:true,
            message:"New project added"
        })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const deletetimeline=async(req,res)=>{
    try {
       const {id}=req.params;
       const usr=await User.findById(req.user._id) 
       usr.timeline=usr.timeline.filter((item)=>item._id!=id);
       await usr.save();
       res.status(200).json({
        success:true,
        message:"deleted from timline"
       })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}
export const deleteproject=async(req,res)=>{
    try {
       const {id}=req.params;
       const usr=await User.findById(req.user._id) 
       const images=usr.projects.find((images)=>images._id==id);
       await cloudinary.v2.uploader.destroy(images.image.public_id);
       usr.projects=usr.projects.filter((item)=>item._id!=id);
       await usr.save();
       res.status(200).json({
        success:true,
        message:"Project deleted"
       })
    } catch (error) {
        return res.status(400).json({
            success:false,
            message:error.message
        })
    }
}