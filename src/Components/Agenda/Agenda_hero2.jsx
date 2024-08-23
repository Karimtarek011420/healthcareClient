import React from 'react'
import './Agenda_hero2.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-multi-carousel/lib/styles.css';
import hero2 from '../../assets/agendahero2.png';
import PropagateLoader from 'react-spinners/PropagateLoader';


function Agenda_hero2() {
  return (
    <>
        <div className='container '>
        <div className='row col-md-10 mt-3 mx-auto'>
            <h3 className='agenda_hero2-header fw-bold text-center lh-base mt-5'>
            Events<span className='agenda_hero22-header fw-bold text-center lh-base'> Calendar</span>
            </h3>
            <p className='agenda_hero2-paragraph fw-normal text-center lh-lg'>
            Through the check-in-to-pay process, several different tones are delivered under a variety of conferences, workshops, and are performed by many other teams.        </p>
        </div>
        </div>
        <div className='container agenda2-hero-container mx-auto mb-4'>
        <div className="row">
            <img className="agenda2-background_image p-0" src={hero2} alt="background_picture"/>
            <div className='agenda2-overlay p-0'></div>
            <div className="col-md-6 mt-5"> 
                <div className="agenda_backg_content ms-5 mt-5 lh-lg">
                    <h5 className='agenda2-hero-h2 fw-medium text-start text-white mt-5 lh-base'>SAUDI SOCIETY FOR</h5>
                    <h3 className='agenda2-hero-h1 me-5 pe-5 fw-bold text-start text-white lh-base'>Health Information Management</h3>
                    <p className='agenda2-hero-para fw-bold text-start lh-base'>THE RITZ-CARLTON, RIYADH, FEBRUARY 19 - 20, 2024</p>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default Agenda_hero2
