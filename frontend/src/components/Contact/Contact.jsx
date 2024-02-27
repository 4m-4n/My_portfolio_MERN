import React, { useEffect, useState } from 'react'
import "./Contact.css"
import {Button, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { contact } from '../../actions/user';
const Contact = () => {
  const {message:alertmsg,error,loading}=useSelector((state)=>state.update)
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [message,setmessage]=useState("");
    const dispatch=useDispatch();
    const alert=useAlert();
    const loginsubmithandler=(e)=>{
        e.preventDefault();
        dispatch(contact(name,email,message));
    }
    useEffect(()=>{
      if(error){
      alert.error(error);
      dispatch({type:"CLEAR_ERRORS"});
       }
      if(alertmsg){
      alert.success(alertmsg);
      dispatch({type:"CLEAR_MESSAGE"});
       }
       },[alert,error,alertmsg,dispatch])
  return <div className="contact">
    <div className="contactrightbar"></div>
    <div className="contactcontainer">
     <form className="contactcontainerform" onSubmit={loginsubmithandler}>
        <Typography variant='h3'>Contact Me</Typography>
     <input type='text' placeholder='Name' required value={name} onChange={(e)=>setname(e.target.value)}/>
     <input type='email' placeholder='Email' required value={email} onChange={(e)=>setemail(e.target.value)}/>
     <textarea placeholder='Message' cols="30" rows="6" required value={message} onChange={(e)=>setmessage(e.target.value)}></textarea>
     <Button variant='contained' type='submit' >Send</Button>
     </form>
    </div>
  </div>
}

export default Contact