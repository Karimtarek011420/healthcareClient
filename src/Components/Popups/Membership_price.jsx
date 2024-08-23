import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Membership_price.css'
import close from '../../assets/close.svg';
import { Button } from '../Button/Button';

function Membership_price(props) {
  return (
    <div className="container mem-price-con">
        <div className="row justify-content-center">
            <div className="col-md-10 mt-3">
                <h5 className='mem-price-title fw-semibold lh-base text-start'>Membership Price</h5>
                <div className="card mem-price-card">
                    <div className="card-body">
                        {/* <button className='btn text-end' onClick={props.onClose}><img src={close} alt="" /></button> */}
                        <p className="card-title mem-price-type fw-medium lh-base text-start">{props.title}</p>
                        <p className="card-subtitle mem-price-amount text-start mb-2 fw-medium lh-base ">{`${props.price} SAR`}</p>
                        <hr/>
                        <div className="total-amount d-flex justify-content-between">
                            <p className="card-title mem-price-type fw-semibold lh-base text-start">Total</p>
                            <p className="card-subtitle mem-price-amount-green text-start mb-2 fw-medium lh-base ">{`${props.price} SAR`}</p>                        
                        </div>
                    </div>
                </div>
                <div className="checkbox d-flex justify-content-between">
                    <input 
                        className="form-check-input mt-3" 
                        type="checkbox"
                        />
                    <label 
                        className="mem-check-label mt-3 fw-medium lh-base mb-3" >
                        &nbsp; By creating an account, you agree to AswaQ's <a href="#" className='mem-termsofuse'>Terms of Use and Privacy Notice.</a>
                    </label>
                </div>
                <div className='procees'>
                <Button
                    className='btns'
                    buttonStyle='btn--green'>
                    Procced to Checkout
                </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Membership_price
