import React,{useState,useEffect}from 'react';
import './App.css';

import MyNavbar from './MyNavbar';
import About from './About';
import Intro from './Intro';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    })
  });
  return (
    <div className="app">
   
       
       
            <MyNavbar/>
           <Intro/>
           
        
          <About/>  
          <Projects/>
        
         <Contact/>
          
     
    </div>
  );
}

export default App;
