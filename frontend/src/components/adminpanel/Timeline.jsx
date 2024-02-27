import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux'
import { addtimeline, deletetimeline, getuser } from '../../actions/user';
import {MdKeyboardBackspace} from "react-icons/md"
import {Typography,Button} from "@mui/material"
import {Link} from "react-router-dom"
import { FaTrash } from 'react-icons/fa';
const Timeline = () => {
    const {message,error,loading}=useSelector((state)=>state.update)
    const {user}=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const alert =useAlert();
    const [title,settitle]=useState("");
    const [description,setdescription]=useState("");
    const [date,setdate]=useState("");
    const submithandler=async(e)=>{
        e.preventDefault();
       await dispatch(addtimeline(title,description,date));
        dispatch(getuser());
    }
    const deletehandler=async(id)=>{
         await dispatch(deletetimeline(id));
        dispatch(getuser());
    }
    useEffect(()=>{
        if(error){
        alert.error(error);
        dispatch({type:"CLEAR_ERRORS"});
         }
        if(message){
        alert.success(message);
        dispatch({type:"CLEAR_MESSAGE"});
         }
         },[alert,error,message,dispatch])
  return  (<div className='Adminpanel'>
  <div className="Adminpanelcontainer">
  <Typography variant='h3'>Add timeline</Typography>
  <form onSubmit={submithandler}>
  <input type='text' placeholder='title'  value={title} onChange={(e)=>settitle(e.target.value)} className='Adminpanelinput'/>
  <input type='text' placeholder='description'  value={description} onChange={(e)=>setdescription(e.target.value)} className='Adminpanelinput'/>
<input type='date' placeholder='date'  value={date} onChange={(e)=>setdate(e.target.value)} className='Adminpanelinput'/>

<Link to="/account">
  Back<MdKeyboardBackspace/>
</Link>
<Button type='submit' variant='contained' >ADD</Button>
  </form>
  <div className="adminpaneltimline">
    {
        user && user.timeline && user.timeline.map((item)=>(
            <div className='timecard' key={item._id}>
                <Typography variant='h6'>{item.title}</Typography>
                <Typography variant='body1' style={{letterSpacing:"2px"}}>{item.description}</Typography>
                <Typography variant="body1" style={{fontWeight:600}}>{item.date.toString().split("T")[0]}</Typography>
                <Button
                style={{
                    margin:"auto",  
                    display:"block",
                    color:"rgba(40,40,40,0.7)",
                }}
                onClick={()=>deletehandler(item._id)}>
               <FaTrash/>
                </Button>
            </div>
        ))
    }
  </div>
  </div>
</div>
  )
}

export default Timeline