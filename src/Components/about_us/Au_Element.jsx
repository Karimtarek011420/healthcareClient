import React from 'react'
import './Au_Element.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import pic1 from '../../assets/Image1.svg';

function Au_Element() {
  return (
    <div className='container-fluid au-e1-con'>
        <div className='row'>
            <div className='col-md-6'>
                <p className='au-e1-p1 text-start fw-medium'>About SHIMA</p>
                <h3 className='au-e1-header text-start fw-bold'>The Saudi <span className='au-e1-h-green fw-bold text-start'>Health Information Management</span> Association </h3>
                <p className='au-e1-p2 lh-base text-start fw-normal'>The Saudi Health Information Management Association <b>SHIMA</b> is a pioneering force in elevating the standards of healthcare data management within the Kingdom of Saudi Arabia. Established in 2012 under the esteemed auspices of the Saudi Commission for Health Specialties <b>SCFHS</b>, SHIMA is committed to fostering a community of skilled and dedicated professionals who are at the forefront of transforming healthcare through the effective management of health information. Since its inception, SHIMA has been instrumental in serving the healthcare sector, contributing to the broader goal of achieving sustainable development for the Kingdom.
                  To achieve this, SHIMA develops and delivers training programs, establishes professional standards, and fosters collaboration with government and private healthcare entities. We represent the professionals of both health information management and health informatics at the regional, national, and international levels.
                </p>
            </div>
            <div className='col-md-6'>
                <img src={pic1} className='img-con'/>
            </div>
        </div>
    </div>
  )
}

export default Au_Element
