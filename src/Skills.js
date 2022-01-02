import React,{useEffect} from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Skills.css';
import CodeIcon from '@material-ui/icons/Code';
const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration : 2500
    })
  });
   
   
    return (
        <div className='skills'>
          <h1 data-aos='fade-right'>My Skills & Services </h1>
          <div className='skills__firstSection'>
           <div className='skills__firstSectionDeveloper' data-aos='fade-right'>
             <div className='skills__occupation'>
         
             <h2>Web Developer</h2>
             <CodeIcon className='webDeveloperIcon'/>
             </div>

             <p>Self-taught & problem solver developer who focuses on building websites and web apps that look great and function correctly. </p>
           </div>
           <div className='skills__firstSectionDesigner' data-aos='fade-right'>
             <div className='skills__occupation'>
                <h2>Web Designer</h2>
                <img src="/design.png"/>
               
             </div>
            
             <p>I have a passion for designing delightful and user friendly experiences.</p>
             <p></p>
           </div>
          </div>
         <p data-aos='fade-right' className='textTechnology'>The technology I use:</p>
          <div className='skills__secondSection'  data-aos='fade-right'>
              <div className='skills__secondSectionContainer'>
              <div className='skill' data-aos='fade-right'>
                 <img src='https://img.icons8.com/color/2x/html-5.png' className='skill__img'/>
                 <p>HTML</p>
              </div>
               <div className='skill' data-aos='fade-right'>
               <img src="https://img.icons8.com/color/50/000000/css3.png"/>
                 <p>CSS</p>
              </div>
              <div className='skill' data-aos='fade-right'>
              <img src="https://img.icons8.com/color/48/000000/sass.png"/>
                <p>SASS</p>
              </div>
              <div className='skill' data-aos='fade-right'>
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
              <p>Javascript</p>
            </div>
          

                
           
          
            <div className='skill' data-aos='fade-right'>
            <img src="https://img.icons8.com/officel/48/000000/react.png"/>
              <p>ReactJs</p>
            </div>
            <div className='skill' data-aos='fade-right'>
            <img src="https://img.icons8.com/color/48/000000/firebase.png"/>
              <p>Firebase</p>
            </div>
            <div className='skill' data-aos='fade-right'>
            <img src="https://img.icons8.com/color/48/000000/adobe-illustrator--v1.png"/>
              <p>Adobe Illustrator</p>
            </div>
            <div className='skill' data-aos='fade-right'>
            <img src="https://img.icons8.com/color/48/000000/figma--v1.png"/>
              <p>Figma</p>
            </div>
              </div>
               
            </div>
          
            
            
            

       

            
        </div>
    )
}

export default Skills