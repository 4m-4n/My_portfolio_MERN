import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { MdKeyboardBackspace } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addproject, deleteproject, getuser } from '../../actions/user'
import { ProjectCard } from '../Projects/Projects'

const Project = () => {
    const {message,error,loading}=useSelector((state)=>state.update)
    const {user}=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    const alert=useAlert();
    const [url,seturl]=useState("");
    const [title,settitle]=useState("");
    const [image,setimage]=useState("");
    const [description,setdescription]=useState("");
    const [technologies,settechnologies]=useState("");
    const submithandler=async(e)=>{
     e.preventDefault();
     await dispatch(addproject(url,title,image,description,technologies));
     dispatch(getuser());
    }
    const handleimage=(e)=>{
        const file = e.target.files[0];
        const Reader = new FileReader();
    
        Reader.readAsDataURL(file);
    
        Reader.onload = () => {
          if (Reader.readyState === 2) {
            setimage(Reader.result);
          }
        };
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
  return  <div className='Adminpanel'>
  <div className="Adminpanelcontainer">
  <Typography variant='h3'>Add Project</Typography>
  <form onSubmit={submithandler}>
  <input type='text' placeholder='url'  value={url} onChange={(e)=>seturl(e.target.value)} className='Adminpanelinput'/>
  <input type='text' placeholder='title'  value={title} onChange={(e)=>settitle(e.target.value)} className='Adminpanelinput'/>
  <input type='text' placeholder='description'  value={description} onChange={(e)=>setdescription(e.target.value)} className='Adminpanelinput'/>
<input type='text' placeholder='technologies'  value={technologies} onChange={(e)=>settechnologies(e.target.value)} className='Adminpanelinput'/>
<div className="Adminpanelskill">
  <div>
      <Typography >Screenshot</Typography>
      <input
      className='Adminpanelfileupload'
      type='file'
      onChange={handleimage}
      accept='image/*'
      />
  </div>
</div>
<Link to="/account">
  Back<MdKeyboardBackspace/>
</Link>
<Button type='submit' variant='contained'  >ADD</Button>
  </form>
  <div className="adminpanleprojects">
    {user && user.projects && user.projects.map((item)=><ProjectCard
    id={item._id}
    key={item._id}
     url={item.url}
     projectimage={item.image.url}
     description={item.description}
     projecttitle={item.title}
     technologies={item.technologies}
     isAdmin={true}
     />)}
  </div>
  </div>
</div>
}

export default Project