 
import React from 'react';

import '../PagesCss/Aboutcss.css';
import Aboutme from '../Images/Aboutme.png';
import { Link } from 'react-router-dom';
import watsapplink from '../Images/watsicon.png';
import linkedin from '../Images/linkedinlink.png';
import github from '../Images/githublink.png';
import youtube from '../Images/youtube.png';
import facebook from '../Images/faceboklink.png';
import instagram from '../Images/instagramlink.png';
import maillink from '../Images/maillink.png';
 

function About() {
  // ....../////////////......javascript ......for cicular bar.....///
  
   

 



  return (
    <div id='Aboutmepage'>
    <img   src={Aboutme} alt="Aboutme" className="amboutimg" />
    <h3 className="aboutname">Muqadus Khaliq</h3>
    <p className="aboutparagragh"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br />Nesciunt doloribus ut a nisi blanditiis quaerat voluptatibus eum laudantium ab officiis? <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure suscipit consequatur <br />alias voluptatibus nulla autem maiores dolore itaque repellat ea.</p>


{/* ..................../////////////////............EDUCATION SECTION..........////////// */}

    <section className="abouteducation">
      <h2 className="abouteduhead">Education</h2>
     <div className="skillsbars">
   
      <Link className="skillbar1">
      
<h3 className="year1">2018-2020</h3>
<b><h3 className="scool1">high scool deree</h3></b>
<p className="degree1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, repellendus?</p>
      </Link>
      <Link className="skillbar2">
<h3 className="year2">2018-2020</h3>
<b><h3 className="scool2">high scool deree</h3></b>
<p className="degree2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, repellendus?</p>
      </Link>
      <Link className="skillbar3">
<h3 className="year3">2018-2020</h3>
<b><h3 className="scool3">high scool deree</h3></b>
<p className="degree3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, repellendus?</p>
</Link>
      <Link className="skillbar4">
<h3 className="year4">2018-2020</h3>
<b><h3 className="scool4">high scool deree</h3></b>
<p className="degree4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, repellendus?</p>
      </Link>
     </div>
    </section>


{/* ..............//////////////////............technical  SKILLS......//////// */}


    <section className="professionalskills">
      <h1 className="prohead">Technical Skills</h1>
      <div className="proskillbox">
     <div className="proskil-box">
      <span className="title1">HTML</span>
<div className="proskil">
      <span className="proskill-html">
            <span className="toolip1">95%</span>
      </span>
</div>
     </div>
     {/* ..///2nd..// */}
     <div className="proskil-box">
      <span className="title1">CSS</span>
<div className="proskil">
      <span className="proskill-css">
            <span className="toolip1">85%</span>
      </span>
</div>
     </div>
     {/* ..... 3rd../// */}
     <div className="proskil-box">
      <span className="title1">JAVASCRIPT</span>
<div className="proskil">
      <span className="proskill-javascript">
            <span className="toolip1">65%</span>
      </span>
</div>
     </div>
     {/* ..///// 4th..// */}
     <div className="proskil-box">
      <span className="title1">REACT</span>
<div className="proskil">
      <span className="proskill-react">
            <span className="toolip1">65%</span>
      </span>
</div>
     </div>
     </div>
    </section>

{/* ..................../////////////.................LINKS SECTION.............//////// */}


<section className="links">
      <h1 className="liknshead">Links</h1>
      <div className="contactlinks">
      <div className="watsapplink"  >
      <a href="https://wa.me/923250663988" className="watsapp">
        <img src={watsapplink}alt="watsapp" className="showwatsapp"/>
      </a>
    </div>
    <div className="linkedinlink"  >
      <a href="https://wa.me/923250663988" className="linkedin">
        <img src={linkedin}alt="linkedin" className="showlinkedin"/>
      </a>
    </div>
    <div className="githublink"  >
      <a href="https://wa.me/923250663988" className="github">
        <img src={github}alt="github" className="showgithub"/>
      </a>
    </div>
    <div className="youtubelink"  >
      <a href="https://wa.me/923250663988" className="youtube">
        <img src={youtube}alt="youtube" className="showyoutube"/>
      </a>
    </div>
    <div className="facebooklink"  >
      <a href="https://wa.me/923250663988" className="facebook">
        <img src={facebook}alt="facebook" className="showfacebook"/>
      </a>
    </div>
    <div className="instagramlink"  >
      <a href="https://wa.me/923250663988" className="instagram">
        <img src={instagram}alt="instagram" className="showinstagram"/>
      </a>
    </div>
    <div className="maillink"  >
      <a href="https://wa.me/923250663988" className="mail">
        <img src={maillink}alt="mail" className="showmaillink"/>
      </a>
    </div>
    </div>
</section>
{/* .................../////////.............Professional skills...........///// */}

 

    </div>
  )
}

export default About

 