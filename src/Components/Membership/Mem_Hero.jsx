import bg3 from '../../assets/third-bg.svg';
import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import './Mem_Hero.css';
import { useState } from 'react'
import Navbar_animated from '../NabarTest/Navbar_animated';


function Mem_Hero() {
  const memRef = useRef();
  
  
  
  return <>
    <Navbar_animated page={false}/>
    
    <div className='container-fluid mem-hero-container vh-100'>
      <img className="mem-background_image" src={bg3} alt="background_picture"/>
      <div className='mem-overlay'>
          <div className='row col-md-5'>
              <div className="mem-backg_content p-5 mt-5">
                  <h5 className='mem-hero-h2 mt-5'>SAUDI SOCIETY FOR</h5>
                  <h3 className='mem-hero-h1'>Health Information Management</h3>
                  <p className='mem-hero-para'>THE RITZ-CARLTON, RIYADH, FEBRUARY 19 - 20, 2024</p>
              </div>
          </div>
      </div>
    </div>
  </>
}

export default Mem_Hero


/**<div class="carousel-caption">
                    <h1>Second slide label</h1>
                    <p>Some representative placeholder content for the second slide.</p>
                </div> */
