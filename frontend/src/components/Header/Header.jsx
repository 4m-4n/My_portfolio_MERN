import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import Logo from "../../images/Logo.png"
import {FaUserAlt} from "react-icons/fa"
const Header = () => {
  return <ReactNavbar 
  navColor1="white" 
  navColor2="black"
  burgerColor="skyblue"
  burgerColorHover="skyblue"
  logo={Logo}
  logoWidth="250px"
  logoHoverColor="skyblue"
  nav2justifyContent="space-around"
  nav3justifyContent="space-around"
  link1Text="Home"
  link2Text="About"
  link3Text="Projects"
  link4Text="Contact"
  link1Url="/"
  link2Url="About"
  link3Url="Projects"
  link4Url="Contact"
  link1ColorHover="white"
  link1Color="skyblue"
  link1Size="1.5rem"
  link1Padding="3vmax"
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  profileIconColor="skyblue"
  profileIconColorHover="white"
  />;
}

export default Header