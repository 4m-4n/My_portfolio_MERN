import { connect } from "http2";
import mongoose from "mongoose";
export const mongodb=()=>{
    mongoose.connect(process.env.MONGO_URI).then((c)=>{
    console.log(`database connected to ${c.connection.host}`);}).catch(
        (e)=>{console.log(e);}
    )
}   