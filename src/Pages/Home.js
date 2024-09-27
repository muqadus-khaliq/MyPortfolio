import React from 'react'
import Intro from '../Components/Intropart/Intro.js'
import Skillsection from '../Components/Skillssection/Skillsection.js'
import Projectssection from '../Components/Projectsection/Projectssection.js'
import Contactsection from '../Components/Contact/Contactsection.js'
import  Footer from '../Components/Footer/Footer.js'

function Home() {
  return (
    <div>
       <Intro/>
      <Skillsection/>
      <Projectssection/>
      <Contactsection/>
      <Footer/>
    </div>
  )
}

export default Home
