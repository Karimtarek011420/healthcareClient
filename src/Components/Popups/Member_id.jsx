import React from 'react'
import './Logout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from '../Button/Button';

function Membership_id(props) {
  return (
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10">
                <p className='pp--title fw-semibold lh-base text-center'>Add Membership Id</p>
                <div className="pp-mid-btn-grp mx-auto">
                <label for="exampleFormControlInput1" className="form-label my-profile-lab text-start fw-semibold lh-sm">member id</label>
                <input type="number" className="form-control mb-3 " id="exampleFormControlInput1" placeholder="123456"/>
                    <Button
                    className='btns fw-semibold'
                    buttonStyle='btn--green'
                    >
                    Log in
                    </Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Membership_id
