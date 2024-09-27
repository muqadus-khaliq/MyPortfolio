
// import React, { useState } from 'react'
// import '../../Components/Navbar/Navbar.css';
// import  Logo from'../../Images/logo.png';
// import { Link } from 'react-router-dom';
// import { Routes, Route } from 'react-router-dom';
 
// import Home from '../../Pages/Home.js';
// import About from '../../Pages/About.js';
// import Skills from '../../Pages/Skills.js';
// import Courses from '../../Pages/Courses.js';
// import Contact from '../../Pages/Contact.js';
// import Contactimg from '../../Images/Contact.png';
// import mobilelogo from '../../Images/burger_menu-removebg-preview.png'
 
// function Navbar() {
//   const [showMenu, setshowMenu] =useState(false);
//   return (
//     <>
    
//      <nav className="navbar"> 
//      <img src={Logo} alt="logo" className='logo' />
//  <div className="desktopmenubar">
//      <ul>
//       <li>
//         <Link to='/'>Home</Link>
//       </li>
//       <li>
//         <Link to='/About'>About</Link>
//       </li>
//       <li>
//         <Link to='/Skills'>Skills</Link>
//       </li>
//       <li>
//         <Link to='/Courses'>Courses</Link>
//       </li>
//       <li>
//         <Link to='/Contact'>Contact</Link>
//       </li>
//      </ul>
//      </div>
    
// <button className="desktopbtn">
//     <img  alt="he" src=  {Contactimg} className="desktopicon" />Contact me
// </button>


// {/* mobile menu bar */}
// {/* <div className="navmobilemenu" onClick={()=>setshowMenu(showMenu)}  */}
 
//  <img src={mobilelogo} alt="navmenulogo" className='navmenulogo' onClick={()=>setshowMenu(!showMenu)}/>
//  <div className="navmenu" style={{display: showMenu? 'flex': 'none'}}>
// <ul>
//  <li>
//    <Link to='/' onClick={()=>setshowMenu(!showMenu)} >Home</Link>
//  </li>
//  <li>
//    <Link to='/About' onClick={()=>setshowMenu(!showMenu)}>About</Link>
//  </li>
//  <li>
//    <Link to='/Courses' onClick={()=>setshowMenu(false)}>Courses</Link>
//  </li>
//  <li>
//    <Link to='/Skills' onClick={()=>setshowMenu(!showMenu)}>Skills</Link>
//  </li>
//  <li>
//    <Link to='/Contact' onClick={()=>setshowMenu(!showMenu)}>Contact</Link>
//    </li>
// </ul>
// </div>
// </nav>
//  {/* //....................// */}
// <div className="navmenubar">
//     <Routes>
      
//         <Route path='/' element={<Home/>}/> 
//         <Route path='/About' element={<About/>}/> 
//         <Route path='/Skills' element={<Skills/>}/> 
//         <Route path='/Courses' element={<Courses/>}/> 
//         <Route path='/Contact' element={<Contact/>}/> 
//       </Routes>
        
//    </div>
   

    
   
//     </>
//   )
// }

// export default Navbar
 
