import React,{useEffect,useRef} from 'react'
import './Intro.css';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { init } from 'ityped'
const Intro = () => {
   
    return (
        <div className='intro'>
            
   
                <div className='introSectionLeft'>
                  <div className='introSectionRow'>
                      <p>Hi there </p>
                      <img src="https://img.icons8.com/color/48/000000/hand.png"/>
                      <p>I'm,</p>
                   </div>
                   <div className='introSectionColumn'>
                      <h2 className='intro__name'>Alina Iacob</h2>
                      <div className='introJobs'>
                      <h4>
                         Web Developer
                         <span>&</span>
                         Web Designer
                      </h4>
                   

                      </div>
                     
                      <a href='#contact'><button>Hire me</button></a>
                   </div>
              
                </div>
                <div className='introSectionRight'>
                  
                   <img src='/intro1.png' className='intro__secondSectionRightImg'/>
                </div>
                
                
            </div>
       
    )
}

export default Intro
