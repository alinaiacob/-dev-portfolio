import React from 'react'
import "./MyNavbar.css";


import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
const MyNavbar = () => {

    return (
      <ReactBootStrap.Navbar collapseOnSelect expand="xl" className='navbar-flex'>
      <ReactBootStrap.Navbar.Brand href="#"> 
      <div className='navbar__left'>
                  <div className='logo'>
                  <h1>
                      <span className='color'>A</span>
                      <span>lina</span>
                      </h1>

                <h1 className='logoBottom'>
                    <span>I</span>
                    <span>acob</span>
                    </h1>
                  </div>
              
             </div>
            </ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto navbar-right"> 
        <a href="#features" className='link blue' >
        <ReactBootStrap.Nav.Link href="#about" className='blue' id='blue'>About</ReactBootStrap.Nav.Link>
        </a>
        <a href="#pricing"  className='link' >
        <ReactBootStrap.Nav.Link href="#projects" id='link'>Projects</ReactBootStrap.Nav.Link>
        </a>
        <a href="#pricing"  className='link'>
        <ReactBootStrap.Nav.Link href="#contact"  id='link'>Contact</ReactBootStrap.Nav.Link>
        </a>
        </ReactBootStrap.Nav>
   
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
    )
}

export default MyNavbar
