import './Volclub_hero.css'
import React from 'react'
import bg2 from '../../assets/vclubbg.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useState } from 'react'

function Volclub_hero() {
  return (
    <div className='vclub-hero-con'>
      <div className='container-fluid vclub-hero-container mx-auto'>
        <img className="vclub-background_image" src={bg2} alt="background_picture"/>
        <div className='vclub-overlay '></div>
          <div className='row justify-content-center'>
            <div className="col-md-6 mt-3">  
              <div className="vclub-backg_content p-5 mt-5">
                <h3 className='vclub-hero-h1 me-5 fw-medium text-center mt-5'>The Volunteer Club</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Volclub_hero
