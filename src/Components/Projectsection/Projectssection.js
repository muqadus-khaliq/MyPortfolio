import React, { useState } from 'react';
import '../Projectsection/Projectseccss.css';
import previousicon from '../../Images/previousicon.png';
import nexticon from '../../Images/nexticon.png';
import { Link } from 'react-router-dom';

 

//  import ExampleCarouselImage from 'components/ExampleCarouselImage';
function Projectssection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: 'https://picsum.photos/200/300', caption: 'Image 1', Paragraph: 'this is first image' },
    { src: 'https://picsum.photos/200/301', caption: 'Image 2', Paragraph: 'this is second image' },
    { src: 'https://picsum.photos/200/302', caption: 'Image 3', Paragraph: 'this is third image' },
    { src: 'https://picsum.photos/200/303', caption: 'Image 4', Paragraph: 'this is fourth image' },
    { src: 'https://picsum.photos/200/304', caption: 'Image 5' , Paragraph: 'this is fivth image' },
  ];

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(images.length - 1);
    }
  };

  return (
    <div>
      <section id="projects" className="projectsetion">
        <h1 className="projecttitle">Recent Projects</h1>
        <p className="projectdescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, laudantium facilis nisi saepe quae repudiandae commodi cumque fugit. Minus voluptatem tempore odio harum nihil cupiditate quaerat non, vel eaque dolores temporibus voluptatum quasi enim? Corrupti vitae repudiandae odit illo iure.</p>
   
{/* ....... <div className="slideshow">.//..... SLIDSHOW FOR PROJECTS....///... */}

        <img  className="slideimages"  src={images[currentIndex].src} alt={images[currentIndex].caption} />
        <div className="slidecaption">{images[currentIndex].caption}
        <p>{images[currentIndex].Paragraph}</p>
        </div>
     <div className="buttons">
      <button className="prev" onClick={handlePrev}><img src={previousicon} alt="" /></button>
      <button className="next" onClick={handleNext}><img src={nexticon} alt="" /></button>
      </div>
 
<Link to="/Projects" className="moreprojects"> <button className="seemore">See More</button></Link>
 
</section>
</div>
  )
}

export default Projectssection

