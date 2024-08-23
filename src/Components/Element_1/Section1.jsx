import React from 'react'
import './Section1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Link} from 'react-router-dom';
import { Button } from '../Button/Button';
import bluecircle from '../../assets/bluecircle.svg';
import pic1 from '../../assets/Image1.svg';

function Section1() {
  return (
        <div className='row half top-0 start-0 w-100'>
            <div className="col-md-6">
                <div className='cards_1 p-md-5'>
                    <h2 className='header_2 fw-bold lh-base text-start'>Health Information Managment</h2>
                    <p className='paragraph fw-normal lh-base text-start'>The Saudi Health Information Management Association (SHIMA) is a non-profit professional association, established under the auspices of the Saudi Commission for Health Specialties (SCFHS). The association aims to develop and promote the profession of health information management in the Kingdom of Saudi Arabia through organizing training and educational programs to qualify and train professionals in the field of health information management and informatics.</p>
                    <Link to={'/about-us'}>
                        <Button
                            className='btns'
                            buttonStyle='btn--primary'
                            buttonSize='btn--large'
                            onClick={console.log('hey')}
                            >
                            About Us
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="col-md-5 p-0 mx-2"> 
                <div className='wrapper sec1-img-cont mt-3 px-0'>
                    <img src={pic1} alt="" className='sec1-img'/>
                </div>
            </div>
        </div>
  )
}

export default Section1