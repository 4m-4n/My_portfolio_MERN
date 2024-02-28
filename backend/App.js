import express from "express"
import { userrouter } from "./routes/User.js";
import cookieParser from "cookie-parser"
import cors from "cors"
export const app=express();
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());
app.use(cors({
    origin:"*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials:true,
}))
app.use("/api/v1",userrouter);
