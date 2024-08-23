import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import circles from '../../../assets/circles.svg';
import Calender from './Calender';
import './Cal_bg.css';

function Cal_bg() {
  return (
    <div className='container-fluid position-relative my-cal-container'>
        <img src={circles} alt="circles-cal" className='circles-cal' />
        <Calender className='calendar-position justify-content-center' />
    </div>
  );
}

export default Cal_bg;
