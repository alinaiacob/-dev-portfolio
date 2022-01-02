import React,{useEffect} from 'react'
import './Projects.css';
import AOS from "aos";
import "aos/dist/aos.css";
const Projects = () => {
    useEffect(() => {
        AOS.init({
          duration : 2500
        })
      });
    return (
        <div className='projects' id='projects'>
            <div className='projectsTop' data-aos='fade-right'>
                <h1 >My work</h1>
                <img src='/work.png'/>
            </div>
           
            <div className='projects__container'>
                <a href='https://tesla-clone123.netlify.app'>
                <div className='project' data-aos='fade-right'>
                <img src='/tesla-clone.png' className='project__img'/>
                    <p>Tesla Clone</p>
                </div>
                </a>
               
                <a href='https://airbnb-clone12.netlify.app'>
                <div className='project' data-aos='fade-right'>
                    <img src='/airbnb-clone.png' className='project__img'/>
                    <p>Airbnb Clone</p>
                </div>
                </a>
               
                <a href=' https://discover-roumania.netlify.app'>
                <div className='project' data-aos='fade-right'>
                    <img src='/discover-ro.png' className='project__img'/>
                    
                    <p>Discover Roumania</p>
                </div>
                </a>
                
                <a href='https://jewelry-site.netlify.app'>
                <div className='project' data-aos='fade-right'>
                    <img src='/jewelry.png' className='project__img'/>
                    
                    <p>Jewelry Site</p>
                </div>
                </a>
                 
               
               
               
            </div>
        </div>
    )
}

export default Projects
