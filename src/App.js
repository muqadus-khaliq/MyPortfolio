
import React, { useState } from 'react'
import './Components/Navbar/Navbar.css';
import  Logo from'./Images/logo.png';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Skills from './Pages/Skills.js';
import Projects from './Pages/Projects.js';
import Contact from './Pages/Contact.js';
import Contactimg from './Images/Contact.png';
import mobilelogo from './Images/burger_menu-removebg-preview.png'
// import 'bootstrap/dist/css/bootstrap.min.css';
import watsappicon from './Images/watsicon.png';
 


function App() {

  const [showMenu, setshowMenu] =useState(false);
  return (
    <>
    <div className="watsappicon" style={{position:'fixed', bottom:'9px', right: '20px'}}>
      <a href="https://wa.me/923250663988" className="watsapplink">
        <img src={watsappicon}alt="" className="watsapp" style={{width: '60px', height: '60px' }} />
      </a>
    </div>
    <div className="App">
    <nav className="navbar"> 
     <img src={Logo} alt="logo" className='logo' />
 <div className="desktopmenubar">
     <ul>
      <li>
        <Link to='/'>Home</Link>
        
      </li>
      <li>
        <Link to='/About'>About</Link>
      </li>
      <li>
        <Link to='/Skills'>Skills</Link>
      </li>
      <li>
        <Link to='/Projects'>Projects</Link>
      </li>
      <li>
        <Link to='/Contact'>Contact</Link>
      </li>
     </ul>
     </div>
    
<button className="desktopbtn">
    <img  alt="he" src=  {Contactimg} className="desktopicon" />Contact me
</button>


{/* mobile menu bar */}
{/* <div className="navmobilemenu" onClick={()=>setshowMenu(showMenu)}  */}
 
 <img src={mobilelogo} alt="navmenulogo" className='navmenulogo' onClick={()=>setshowMenu(!showMenu)}/>
 <div className="navmenu" style={{display: showMenu? 'flex': 'none'}}>
<ul>
 <li>
   <Link to='/' onClick={()=>setshowMenu(!showMenu)} >Home</Link>
 </li>
 <li>
   <Link to='/About' onClick={()=>setshowMenu(!showMenu)}>About</Link>
 </li>
 <li>
   <Link to='/Skills' onClick={()=>setshowMenu(!showMenu)}>Skills</Link>
 </li>
 <li>
   <Link to='/Projects' onClick={()=>setshowMenu(false)}>Projects</Link>
 </li>
 <li>
   <Link to='/Contact' onClick={()=>setshowMenu(!showMenu)}>Contact</Link>
   </li>
</ul>
</div>
</nav>
 {/* //....................// */}
<div className="navmenubar">
    <Routes>
    
        <Route path='/' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/> 
        <Route path='/Projects' element={<Projects/>}/> 
        <Route path='/Skills' element={<Skills/>}/> 
        <Route path='/Contact' element={<Contact/>}/> 
  
        

      </Routes>
        
   </div>
   
    </div>
    </>
  );
}

export default App;
