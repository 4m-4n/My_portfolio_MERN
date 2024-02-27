import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Button, Typography } from '@mui/material';
import {useDispatch, useSelector} from "react-redux"
import { login } from '../../actions/user.js';
import { useAlert } from 'react-alert';
const Login = () => {
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const alert=useAlert();
    const dispatch=useDispatch();
    const {loading,message,error}=useSelector(state=>state.login);

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(login(email,password));
    }
  useEffect(()=>{
 /*if(error){
 alert.error(error);
 dispatch({type:"CLEAR_ERRORS"});
  }*/
 if(message){
 alert.success(message);
 dispatch({type:"CLEAR_MESSAGE"});
  }
  },[alert,error,message,dispatch])
  return <div className="contact">
    <div className="contactrightbar"></div>
    <div className="contactcontainer">
     <form className="contactcontainerform" onSubmit={submithandler}>
        <Typography variant='h3'>Admin Panel</Typography>
     <input type='email' placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
     <input type='password' placeholder='Password' required value={password} onChange={(e)=>setpassword(e.target.value)}/>

     <Button variant='contained' type='submit' disabled={loading}>Login</Button>
     </form>
    </div>
  </div>
}

export default Login;