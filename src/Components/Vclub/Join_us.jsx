import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Join_us.css';
import { Link } from 'react-router-dom';
import rect from '../../assets/jurect.svg';
import circ from '../../assets/jucir.svg';


function Join_us() {

    return (
        <div>
            <div className='container-fluid ju_con'>
                <img src={rect} alt="" className='rect-ju'/>
                <img src={circ} alt="" className='circ-ju'/>
                <div className='row justify-content-center'>
                    <div className='col-md-7 text-center mb-5 mt-5'>
                        <p className='ju-h1 text-white fw-medium lh-base'>Subscribe to</p>
                        <h3 className='ju-h2 text-white fw-bold lh-base'>The Volunteer Club</h3>
                        <div className='mx-1'>
                            <Link to={'/vform'}>
                                <button
                                    className='btn--circular-noline fw-semibold'>
                                    Join Now
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Join_us;
