import React from 'react'
import '../Skillssection/Skillsectioncss.css'
import Gameskill from '../../Images/ImagesSkills/Gameskill.avif'
import Webskill from '../../Images/ImagesSkills/Webskill.png';
// import Skills from '../../Pages/Skills.js';
import { Link } from 'react-router-dom';

function Skillsection() {
  return (
    <div>
        <section className="introskill" id="skillpart">
 <span className="skilltitle">What I Do</span><br />
 <span className="skilldescription">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi architecto magnam illo cum esse culpa nisi molestiae unde minima quos nihil atque, aliquid dolorum sequi possimus dolore suscipit dolor minus! Iste amet dicta sunt earum eum temporibus alias beatae modi!</span>
 <div className="Skillsbars">
    <Link  to="/Skills" className="Skillbar1">
        <img src={Webskill} alt="WebSkill" className="Skillbar1img" />
        <div className="Skillbar1text">
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, iusto?</p>
        </div></Link>
   
    <Link  to="/Skills" className="Skillbar2">
        <img src={Gameskill} alt="GameSkill" className="Skillbar2img" />
        <div className="Skillbar2text">
            <h2>Game Development</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolores.</p>
        </div>
    </Link>
 </div>
 </section>
    </div>
  )
}

export default Skillsection
