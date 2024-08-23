import React from 'react';
import './Section3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import dart from '../../assets/Group.svg';
import hand from '../../assets/hand.svg';
import lamb from '../../assets/lamb.svg';

function Section3() {
    return (
        <div className="container">
            <div className='row justify-content-center gy-4'>
                <div className="col-md-4">
                    <div className="card our-our-card mx-auto">
                        <div className="card-body">
                            <div className='row textContainer-our mb-3'>
                                <hr className='seperatorcard-2' />
                                <h5 className="card-title-our fw-bold text-start">
                                    Our <span className='card-title-our-2 fw-bold'>Mission & Value</span>
                                </h5>
                                <p className="card-text-our fw-medium lh-lg">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sollicitudin diam ac lorem cras tellus facilisis ut. Morbi dictum ut sed.
                                </p>
                            </div>
                            <div className='imageContainer-our align-content-end text-center'>
                                <img src={dart} className="card-img-top-our h-75 w-75 mx-auto" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card our-our-card mx-auto">
                        <div className="card-body">
                            <div className='row textContainer-our mb-2'>
                                <hr className='seperatorcard-2' />
                                <h5 className="card-title-our fw-bold text-start">
                                    Our <span className='card-title-our-2 fw-bold text-start'>Goals</span>
                                </h5>
                                <p className="card-text-our fw-medium lh-lg text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sollicitudin diam ac lorem cras tellus facilisis ut. Morbi dictum ut sed.
                                </p>
                            </div>
                            <div className='imageContainer-our align-content-end text-center'>
                                <img src={lamb} className="card-img-top h-75 w-75 mx-auto" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card our-our-card mx-auto">
                        <div className="card-body">
                            <div className='row textContainer-our mb-3'>
                                <hr className='seperatorcard-2' />
                                <h5 className="card-title-our fw-bold text-start">
                                    Our <span className='card-title-our-2 fw-bold text-start'>Regulations</span>
                                </h5>
                                <p className="card-text-our fw-medium lh-lg text-start">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum sollicitudin diam ac lorem cras tellus facilisis ut. Morbi dictum ut sed.
                                </p>
                            </div>
                            <div className='imageContainer-our align-content-end text-center'>
                                <img src={hand} className="card-img-top h-75 w-75 mx-auto" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section3;
