import cloudinary from "cloudinary"
import dotenv from "dotenv"
import { app } from "./App.js";
import { mongodb } from "./config/database.js";
dotenv.config({path:"./backend/config/config.env"});
mongodb();
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,       
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET,
})
app.listen(process.env.PORT,()=>{
    console.log(`server is running on port  ${process.env.PORT}`);
})