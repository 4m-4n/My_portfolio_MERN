import React, { useEffect, useState } from 'react'
import "./Adminpanel.css"
import {Link} from "react-router-dom"
import {AiOutlineProject} from "react-icons/ai"
import {MdTimeline} from "react-icons/md"
import {Button, Typography} from "@mui/material"
import {useDispatch, useSelector} from "react-redux"
import { logout, updateuser } from '../../actions/user'
import { useAlert } from 'react-alert'
const Adminpanel = () => {
    const dispatch=useDispatch();
    const alert=useAlert();
    const {message:loginMessage}=useSelector((state)=>state.login)
    const {message,error,loading}=useSelector((state)=>state.update)
   const [name,setname]=useState("");
   const [email,setemail]=useState("");
   const [password,setpassword]=useState("");
   const [about,setabout]=useState({});
   const [skills,setskills]=useState({});

    const submithandler=(e)=>{
        e.preventDefault();
        dispatch(updateuser(name,email,password,skills,about));
    }
    const logouthandler=()=>{
       dispatch(logout());
    }
    const handleaboutimage=(e)=>{
        const file =e.target.files[0]
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
         if(reader.readyState===2){
            setabout({...about, avatar:reader.result});
         }
        }
    }
    const handleimages=(e,val)=>{
        const file =e.target.files[0]
        const reader=new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>{
         if(reader.readyState===2){
            if(val===1){
                setskills({...skills,image1:reader.result});
            }
            if(val===2){
                setskills({...skills,image2:reader.result});
            }
            if(val===3){
                setskills({...skills,image3:reader.result});
            }
            if(val===4){
                setskills({...skills,image4:reader.result});
            }
            if(val===5){
                setskills({...skills,image5:reader.result});
            }
            if(val===6){
                setskills({...skills,image6:reader.result});
            }
         }
        }
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
         if(loginMessage){
            alert.success(message);
            dispatch({type:"CLEAR_MESSAGE"});
             }
         },[alert,error,message,dispatch,loginMessage])
  return (
    <div className='Adminpanel'>
        <div className="Adminpanelcontainer">
        <Typography variant='h3'>Admin Panel</Typography>
        <form onSubmit={submithandler}>
        <input type='name' placeholder='name'  value={name} onChange={(e)=>setname(e.target.value)} className='Adminpanelinput'/>
        <input type='email' placeholder='Email'  value={email} onChange={(e)=>setemail(e.target.value)} className='Adminpanelinput'/>
     <input type='password' placeholder='Password'  value={password} onChange={(e)=>setpassword(e.target.value)} className='Adminpanelinput'/>
      <div className="Adminpanelskill">
        <div>
            <Typography >Skill 1</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,1)}
            accept='image/*'
            />
        </div>
        <div>
            <Typography >Skill 2</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,2)}
            accept='image/*'
            />
        </div>
        <div>
            <Typography >Skill 3</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,3)}
            accept='image/*'
            />
        </div>
        <div>
            <Typography >Skill 4</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,4)}
            accept='image/*'
            />
        </div>
        <div>
            <Typography >Skill 5</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,5)}
            accept='image/*'
            />
        </div>
        <div>
            <Typography >Skill 6</Typography>
            <input
            className='Adminpanelfileupload'
            type='file'
            onChange={(e)=>handleimages(e,6)}
            accept='image/*'
            />
        </div>
      </div>
      <div className="Adminpanelabout">
        <fieldset>
            <legend>About</legend>
            <input
            type='text'
            placeholder='Title'
            value={about.title}
            onChange={(e)=>setabout({...about,title:e.target.value})}
            className='Adminpanelinput'
            />
              <input
            type='text'
            placeholder='SubTitle'
            value={about.subtitle}
            onChange={(e)=>setabout({...about,subtitle:e.target.value})}
            className='Adminpanelinput'
            />
              <input
            type='text'
            placeholder='Description'
            value={about.description}
            onChange={(e)=>setabout({...about,description:e.target.value})}
            className='Adminpanelinput'
            />
              <input
            type='text'
            placeholder='Qoute'
            value={about.qoute}
            onChange={(e)=>setabout({...about,qoute:e.target.value})}
            className='Adminpanelinput'
            />
            <input
            type='file'
            onChange={handleaboutimage}
            className='Adminpanelfileupload'
            placeholder='choose Avatar'
            accept='image/*'
            />
        </fieldset>
      </div>
      <Link to="/admin/timeline">
        TIMELINE<MdTimeline/>
      </Link>
      <Link to="/admin/project">
        Project<AiOutlineProject/>
      </Link>
      <Button type='submit' variant='contained'  >Update</Button>
        </form>
        <Button
        variant='contained'
        color='error'
        style={{display:"block",margin:"4vmax auto"}}
        onClick={logouthandler}>Logout</Button>
        </div>
    </div>
  )
}

export default Adminpanel