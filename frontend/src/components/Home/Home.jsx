import React, { useEffect } from 'react'
import "./Home.css"
import {Link} from "react-router-dom"
import * as THREE from "three"
import {Typography} from "@mui/material"
import Moon from "../../images/Moon.jpg"
import Venus from "../../images/venus.jpg"
import Space from "../../images/starsspace.jpg"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import Timelinee from '../Timeline/Timelinee'

import {
  SiCplusplus,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiMysql,
} from "react-icons/si"
import { MouseOutlined } from '@mui/icons-material'
const Home = ({timelines,skills}) => {
 useEffect(()=>{
    const textureloader=new THREE.TextureLoader();
    const moontexture=textureloader.load(Moon);
    const venustexture=textureloader.load(Venus);
    const spacetexture=textureloader.load(Space);
    const scene=new THREE.Scene();
    const camera=new THREE.PerspectiveCamera(50,window.innerWidth/window.innerHeight,0.1,1000);
    const canvas=document.querySelector(".homecanvas");
    const renderer=new THREE.WebGLRenderer({canvas});
    const moongeometry=new THREE.SphereGeometry(1,64,64);   //moon geo
    const moonmaterial=new THREE.MeshStandardMaterial({map:moontexture});//skin over moon
    const moon=new THREE.Mesh(moongeometry,moonmaterial); //moon
        
    const venusgeometry=new THREE.SphereGeometry(2.5,64,64);   //venus geo
    const venusmaterial=new THREE.MeshBasicMaterial({map:venustexture});//skin over venus
    const venus=new THREE.Mesh(venusgeometry,venusmaterial); //venus
    venus.position.set(3,2,2);
    const pointlight=new THREE.PointLight(0xffffff,40);
    //const pointlight2=new THREE.PointLight(0xffffff,15);
    pointlight.position.set(3,2,2);
    //pointlight2.position.set(-3,-2,0);
   
   // const controls=new OrbitControls(camera,renderer.domElement);
    scene.add(moon);
    scene.add(pointlight);
    scene.add(venus);
    scene.background=spacetexture;
    camera.position.set(0,0,4);
    const animate=()=>{
        requestAnimationFrame(animate);
        moon.rotation.y+=0.02;
        venus.rotation.y+=0.005;                  //using recursion to rotate infinitely
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.render(scene,camera);
    }
    animate();
    return window.addEventListener("scroll",()=>{
      camera.rotation.y=window.scrollY*0.003;
      }
    )
},[])
  return (
    <div className='home'>
        <canvas className='homecanvas'></canvas>
        <div className="homecanvascontainer">
          <Typography variant="h1">
            <p>A</p>
            <p>M</p>
            <p>A</p>
            <p>N</p>
          </Typography>
          <div className="homecanvasbox">
            <Typography variant='h2'>DEVELOPER</Typography>
            <Typography variant='h2'>DESIGNER</Typography>
            <Typography variant='h2'>LEARNER</Typography>
          </div>
          <Link to="/projects">View My Work</Link>
        </div>
        <div className="homescroll">
          <MouseOutlined/>
        </div>
        <div className="homeconatiner">
          <Typography variant='h3'>TIMELINE</Typography>
          <Timelinee timelines={timelines}/>
        </div>
        <div className="homeskills">
          <Typography variant='h3'>SKILLS</Typography>
          <div className="homecubeskill">
            <div className="homecubeskillfaces homecubeskillface1">
              <img src={skills.image1.url} alt='face1'/>
            </div>
            <div className="homecubeskillfaces homecubeskillface2">
              <img src={skills.image2.url} alt='face2'/>
            </div>
            <div className="homecubeskillfaces homecubeskillface3">
              <img src={skills.image3.url} alt='face3'/>
            </div>
            <div className="homecubeskillfaces homecubeskillface4">
              <img src={skills.image4.url} alt='face4'/>
            </div>
            <div className="homecubeskillfaces homecubeskillface5">
              <img src={skills.image5.url} alt='face5'/>
            </div>
            <div className="homecubeskillfaces homecubeskillface6">
              <img src={skills.image6.url} alt='face6'/>
            </div>
          </div>
          <div className="cubeshadow"></div>
          <div className="homeboxskill" id="homeboxskill">
            <SiCplusplus/>
            <SiCss3/>
            <SiReact/>
            <SiMongodb/>
            <SiJavascript/>
            <SiNodedotjs/>
            <SiHtml5/>
            <SiExpress/>
            <SiMysql/>
          </div>
        </div>
    </div>
  )
}

export default Home