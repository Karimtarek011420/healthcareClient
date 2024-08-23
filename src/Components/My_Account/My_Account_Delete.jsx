import React, { useState } from 'react';
import '../Vclubform/Vclub_Form.css';
import { Button } from '../Button/Button';
import PulseLoader from 'react-spinners/PulseLoader';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { logout } from "../../features/UserSlice";

function My_Account_Delete({ code, token, onClose }) {
    const [loading, setLoading] = useState(false);
    const [issure, setIssure] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = async () => {
        setLoading(true);
        try {
            await axios.post(
                `/API/Auth/${code}/deleteUser`, 
                {}, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            dispatch(logout());
            navigate('/'); 
        } catch (err) {
            console.log('Error deleting user:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {issure ? (
                        <>
                            <p className='pp-logout-title fw-semibold lh-base text-center'>Are you Sure?</p>
                            <p className='pp-logout-msg fw-medium lh-base text-center'>If you want to delete your account, press OK.</p>
                            <div className="d-flex justify-content-center">
                                <Button
                                    className='btns fw-semibold'
                                    buttonStyle='btn--green'
                                    onClick={handleDelete}
                                    disabled={loading}
                                >
                                    {loading ? <PulseLoader className='mt-1' size={16} color='white' /> : "OK"}
                                </Button>
                            </div>
                        </>
                    ) : (
                        <>
                            <p className='pp-logout-title fw-semibold lh-base text-center'>Delete Your Account</p>
                            <p className='pp-logout-msg fw-medium lh-base text-center'>Are you sure you want to delete your account?</p>
                            <div className="d-flex justify-content-center">
                                <Button
                                    className='btns fw-semibold'
                                    buttonStyle='btn--outline2'
                                    onClick={onClose}
                                    disabled={loading}
                                >
                                    Cancel
                                </Button>
                                <p>&nbsp;&nbsp;</p>
                                <Button
                                    className='btns fw-semibold'
                                    buttonStyle='btn--green'
                                    onClick={() => setIssure(true)} // Wrap in a function
                                    disabled={loading}
                                >
                                    {loading ? <PulseLoader className='mt-1' size={16} color='white' /> : "Delete"}
                                </Button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default My_Account_Delete;
