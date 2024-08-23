import React, { useState } from 'react'
import './Logout.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from '../Button/Button';
import PulseLoader from 'react-spinners/PulseLoader';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import { useDispatch } from "react-redux";
import {logout} from "../../features/UserSlice"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate



function Logout(props) {

    const user = useSelector(selectUser);
    const usertoken = user?.token;
    const dispatch = useDispatch();


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [Success, setSuccess] =useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

 
    const handlelogout = async () => {
    setLoading(true);
    try {
        const response =  await axios.post('/API/Auth/Logout', usertoken);
        dispatch(logout());
        navigate('/'); // Redirect to the home page
        console.log(response);
    } catch (err) {
        setError(err);
    } finally {
        setLoading(false);
    }
    }
  return (

    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <p className='pp-logout-title fw-semibold lh-base text-center'>Log Out</p>
                    <p className='pp-logout-msg fw-medium lh-base text-center'>Are you sure you want to log out from your account</p>
                    <div className="pp-btn-grp d-flex justify-content-between w-75 mx-auto">
                        <Button
                            className='btns fw-semibold'
                            buttonStyle='btn--outline2'
                            onClick={props.onClose}
                            >
                            Cancel
                        </Button>
                        <p>&nbsp;&nbsp;</p>
                        <Button
                        className='btns fw-semibold'
                        buttonStyle='btn--green'
                        onClick={handlelogout}
                        >
                        {loading ? <PulseLoader className='mt-1' size='16' color='white'/>:
                        "Log Out"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Logout
