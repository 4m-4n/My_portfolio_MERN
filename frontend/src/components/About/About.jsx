import React from 'react'
import "./About.css"
import {Typography} from "@mui/material"
import Aman from "../../images/Aman.jpg"
const About = ({about}) => {
  return <div className="about">
    <div className="aboutcontainer">
        <Typography>{about.qoute}</Typography>
    </div>
    <div className="aboutcontainer2">
        <div>
            <img src={about.avatar.url} alt='pic' className='amanpic'/>
            <Typography variant='h4' style={{margin:"1vmax 0",color:'black'}}>Aman Gupta</Typography>
            <Typography>{about.title}</Typography>
            <Typography style={{margin:'1vmax 0', textAlign:"center"}}>{about.subtitle}</Typography>
        </div>
        <div>
            <Typography style={{
                wordSpacing:"5px",
                lineHeight:"50px",
                letterSpacing:"5px",
                textAlign:"right",
            }}>{about.description}</Typography>
        </div>
    </div>
  </div>
}

export default About