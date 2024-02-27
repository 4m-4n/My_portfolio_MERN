import React, { useEffect } from 'react'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import { getuser, loaduser } from './actions/user.js'
import {useDispatch, useSelector} from "react-redux"
import Adminpanel from './components/adminpanel/Adminpanel.jsx'
import Timeline from './components/adminpanel/Timeline.jsx'
import Project from './components/adminpanel/Project.jsx'
const App = () => {
  const dispatch=useDispatch();
  const {isauthenticated}=useSelector((state)=>state.login);
  const {loading,user}=useSelector((state)=>state.user);
  useEffect(()=>{
     dispatch(getuser());
     dispatch(loaduser());
  },[dispatch])
  return (<Router>
   {loading?<div>loading</div>:( <><Header/>
    <Routes>
      <Route path="/" element={<Home 
      timelines={user.timeline}
      skills={user.skills}/>}/>
      <Route path="/about" element={<About 
      about={user.about}/>}/>
      <Route path="/Projects" element={<Projects 
      projects={user.projects}/>}/>
      <Route path="/contact"  element={<Contact/>}/>
      <Route path="/Account"  element={isauthenticated?<Adminpanel/>:<Login/>}/>
      <Route path="/admin/timeline"  element={isauthenticated?<Timeline/>:<Login/>}/>
      <Route path="/admin/project"  element={isauthenticated?<Project/>:<Login/>}/>
    </Routes>
    <Footer/>
    </>)}
  </Router>)
}

export default App