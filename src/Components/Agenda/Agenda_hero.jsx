import React from 'react'
import './Agenda_hero.css'
import bg2 from '../../assets/myacc.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useState } from 'react'


function Agenda_hero() {
  return (
    <div className='agenda-hero-con'>
      <div className='container-fluid agenda-hero-container mx-auto'>
        <img className="agenda-background_image" src={bg2} alt="background_picture"/>
        <div className='agenda-overlay '></div>
          <div className='row justify-content-center'>
            <div className="col-md-6 mt-3">  
              <div className="agenda-backg_content p-5 mt-5">
                <h3 className='agenda-hero-h1 me-5 fw-medium text-center mt-5'>All Agenda 2025</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
)
}

export default Agenda_hero


