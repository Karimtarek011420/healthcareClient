import React from 'react'
import './Contact_us_hero.css'
import conimg from '../../assets/contactus.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useState } from 'react'

function Contact_us_hero() {
  return (
    <div className='con-us-hero-con'>
      <div className='container-fluid con-us-hero-container mx-auto'>
        <img className="con-us-background_image" src={conimg} alt="background_picture"/>
        <div className='con-us-overlay'></div>
          <div className='row mx-auto ms-5'>
            <div className="col-md-6 mt-3">  
              <div className="con-us-backg_content p-5 mt-5">
                <p className='con-us-hero-p1 fw-normal lh-base text-white mt-5'>Health Information Management</p>
                <h3 className='con-us-hero-h1 me-5 pe-5 fw-bold'>Contact Us</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Contact_us_hero
