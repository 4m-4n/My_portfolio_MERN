import express from "express";
import { addproject, addtimeline, contact, deleteproject, deletetimeline, getUser, login, logout, myprofile, updateuser } from "../controllers/User.js";
import { isauthenticated } from "../controllers/auth.js";

export const userrouter=express.Router();
userrouter.post("/login",login);
userrouter.get("/logout",logout);
userrouter.get("/user",getUser);
userrouter.get("/me",isauthenticated,myprofile);
userrouter.post("/contact",contact);
userrouter.put("/admin/update",isauthenticated,updateuser);
userrouter.post("/admin/timeline/add",isauthenticated,addtimeline);
userrouter.post("/admin/project/add",isauthenticated,addproject);
userrouter.delete("/admin/project/:id",isauthenticated,deleteproject);
userrouter.delete("/admin/timeline/:id",isauthenticated,deletetimeline);

