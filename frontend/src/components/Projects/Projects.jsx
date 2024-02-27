import React from 'react'
import "./Projects.css"
import {Typography} from "@mui/material"
import {AiOutlineProject} from "react-icons/ai"
import {Delete} from "@mui/icons-material"
import { useDispatch } from 'react-redux'
import { deleteproject, getuser } from '../../actions/user'
export const ProjectCard=({url,
    projectimage,
    description,
    projecttitle,
    technologies,
    isAdmin=false,
id})=>{
        const dispatch=useDispatch();
        const deletehandler=async(id)=>{
            await dispatch(deleteproject(id));
            dispatch(getuser());
        }
    return <>
    <a href={url} className="projectcard" target='black'>
        <div>
            <img src={projectimage} alt='project' className='projectpic'/>
            <Typography variant='h5'>{projecttitle}</Typography>
        </div>
        <div>
            <Typography variant='h4'>About Project</Typography>
            <Typography>{description}</Typography>
            <Typography variant='h6'>Tech Stack: {technologies}</Typography>
        </div>
    </a>
    {isAdmin && (<button   style={{
                    margin:"auto",  
                    display:"block",
                    color:"rgba(40,40,40,0.7)",
                }}
                onClick={()=>(deletehandler(id))}>
        <Delete/>
    </button>)}
    </>
}
const Projects = ({projects}) => {
  return (
    <div className="projects">
        <Typography variant='h3'>Projects <AiOutlineProject/> </Typography>
        <div className="projectswrapper">
            {projects.map((project,index)=>(
            <ProjectCard
            id={project._id}
            key={project._id} 
            url={project.url}
            projectimage={project.image.url}
            description={project.description}
            projecttitle={project.title}
            technologies={project.technologies}
            /> 
            ))}
        </div>
        <Typography variant='h3' style={{fontSize:"1rem"}}>All the Projects displayed above are made by me!</Typography>  
    </div>
  )
}

export default Projects;