import React from 'react'
import '../Intropart/Intro.css';
import Intro2 from '../../Images/Intro2.png'
import Hireme3 from '../../Images/CV.png'
import jsPDF  from '../../Images/MuqadusCV.pdf';

function intro() { 
  return (
    

    <div>
      <section id="Intro">
        <div className="Introcontent">
<span className="hello">Hello,</span> <br />
<span className="introtext">I'm  <span className="introname">Muqadus </span><br />Website Designer</span>
<p className="introparagrapgh">As a passionate web designer, I specialize in crafting visually stunning and user-friendly websites. heunbvexnbjshejznhsg</p>
{/* <button onClick={handleDownload}>Download CV</button> */}

<button  className="btn" ><img src={Hireme3} alt="download cv"/><a href={ jsPDF}  >Download CV</a> </button>

        </div>
        <img src={Intro2} alt="My Profile" className="bg" />
      </section>
    </div>
  )
}


export default intro
