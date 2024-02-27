import React from 'react'
import "./Footer.css"
import {Typography} from "@mui/material"
import {Link} from "react-router-dom"
import {BsGithub,BsInstagram,BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return <div className="footer">
    <div>
<Typography variant='h5'>About Me</Typography>
<Typography>Passionate Software Engineer ready to take on the digital world-" Transforming ideas into reality with code."</Typography>
<Link to="/contact" className='contactbtn' >
    <Typography>Contact Me</Typography>
</Link>
</div>
<div>
    <Typography variant='h6'>Social Media</Typography>
    <a href='https://github.com/4m-4n' target='_blank'>
        <BsGithub/>
    </a>
    <a href='https://www.linkedin.com/in/aman-gupta-789651213/' target='_blank'>
        <BsLinkedin/>
    </a>
    <a href='https://www.instagram.com/4m.4n_/' target='_blank'>
        <BsInstagram/>
    </a>
</div>
  </div>
}
export default Footer;