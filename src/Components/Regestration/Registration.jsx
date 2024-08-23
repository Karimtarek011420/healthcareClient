import React from 'react'
import { Button } from '../Button/Button'
import reg from '../../assets/reg.png';
import './Registration.css';
import { Link } from 'react-router-dom';


function Registration() 
{
  return (
    <div>
      <div className='container-fluid reg-container text-white justify-content-center'>
*       <img src={reg} alt="registration" className='registration-img'/>
        <div className='reg-sec-overlay '></div>

        <div className='row justify-content-center reg-rec-backg'>
            <div className='col-md-7 text-center mb-5 mt-5'>
                <h3 className='header-registration fw-bold'>Do you want to registration for association membership</h3>
                <p className='header2-registration'>Registration process with check-in for payment. Several different activities are offered that fall under the umbrella of the association, including conferences, workshops, training courses, and many other activities.</p>
                <div className='mx-1'>
                  <Link to={'/membership'}>
                    <Button
                        className='btns'
                        buttonStyle='btn--white'
                        >
                        Registeration Now
                    </Button>
                  </Link>
                  <Link to={'/about-us'}>
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        >
                        Learn more
                    </Button>
                  </Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
