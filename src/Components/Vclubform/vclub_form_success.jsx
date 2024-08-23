import React from 'react'
import Success from '../../assets/sucess.svg'
import './Vclub_Form.css'
import { Button } from '../Button/Button'
import { Link } from 'react-router-dom'


function vclub_form_success(props) {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-9 text-center pt-3">
                <img src={Success} alt="" className=''/>
                <h3 className='vsuc-header  fw-bold lh-base'>Thanks</h3>
                <p className='vsuc-para px-3 fw-medium lh-base'>We received your request
                and will send approve in your mail</p>
                <div className='w-50 mx-auto'>
                    <Link to='/'>
                        <Button
                            className='btns'
                            buttonStyle='btn--circular2'
                            type="submit"
                            onClick={props.onClose}>
                                Go Home
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default vclub_form_success
