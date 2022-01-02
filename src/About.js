import React,{useEffect} from 'react'
import './About.css';
import Skills from './Skills';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({
          duration : 2500
        })
      });
    return (
        <div className='about' id='about'>
        
          <h1 data-aos='fade-right'>About Me</h1>    
            <div className='about__text'>
            
               <p data-aos='fade-right'>I started my coding journey almost 2 years ago when I discovered the fascinating world of web development , now I develop <span className='highlight'>eye-catching</span> and <span className='highlight'>responsive</span> layouts and web apps.</p>
               <p data-aos='fade-right'>I'm a diligent,self-starter person from Roumania, who likes to make things in the best possible way,and I'm always looking for new challenges .</p>
            </div>
          
         <a href='#contact'>
           <button data-aos='fade-right'>Let's discuss</button>
         </a>
        
          
           
            <Skills data-aos='fade-right'/>
          
        </div>
    )
}

export default About
