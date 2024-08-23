import bg2 from '../../assets/myacc.jpg';
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import { Button } from '../Button/Button';
import { useState } from 'react'
import './My_Account_Hero.css'

function My_Account() {
  return (
    <div className='my-acc-hero-con'>
      <div className='container-fluid my-acc-hero-container mx-auto'>
        <img className="my-acc-background_image" src={bg2} alt="background_picture"/>
        <div className='my-acc-overlay '></div>
          <div className='row justify-content-center'>
            <div className="col-md-6 mt-3">  
              <div className="my-acc-backg_content p-5 mt-5">
                <h3 className='my-acc-hero-h1 me-5 pe-5 fw-medium text-center mt-5'>My Account</h3>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default My_Account
