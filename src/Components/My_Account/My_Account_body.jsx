import React, { useEffect, useState } from 'react';
import './My_Account_body.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from '../Button/Button';
import Card from './card/card';
import { Link } from 'react-router-dom';
import questionmark from '../../assets/questionmark.svg';
import QRCode from 'react-qr-code';
import LogoutModal from '../LogoutModal';
import axios from 'axios';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import { useDispatch } from "react-redux";
import { logout } from "../../features/UserSlice";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import My_Account_Delete_Modal from '../My_Account_Delete_Modal';


function My_Account_body() {
    const [values, setValues] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: ''
    });
    const [values2, setValues2] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: ''
    });
    const [initialValue, setinitialValue] = useState({
        fname: '',
        lname: '',
        email: '',
        password: '',
        phone: ''
    });
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [btn1, setBtn1] = useState(true);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [code, setCode] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const user = useSelector(selectUser);
    const token = user?.token;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
// const [flag, setFlag] = useState(true);
    async function getAccount() {
        try {
            const { data } = await axios.get('/API/Auth/UserInfo', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(data.fname)
            setValues(
                {   fname: data.fname, 
                    lname: data.lname, 
                    email: data.email, 
                    password: data.password,
                    phone:  data.phone});
            setCode(data.code);
            
        } catch (error) {
            console.error('Error fetching account information:', error);
        }
    }

    useEffect(() => {
        getAccount()
        setIsButtonDisabled(JSON.stringify(values2) === JSON.stringify(initialValue));
    }, [token, values2]);


    function handleChange(e) {
        const { name, value } = e.target;
        setValues2(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    }

    function mergeObjectsWithEmptyValues(obj1, obj2) {
        Object.keys(obj1).forEach(key => {
            if (obj1[key] === null || obj1[key] === undefined || obj1[key] === '') {
                obj1[key] = obj2[key];
            }
        });
        return obj1;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        mergeObjectsWithEmptyValues(values2, values);
        setLoading(true);
        setError('');
        try {
            const { data } = await axios.post('/API/Auth/UpdateProfile', values2, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/json"
                }
            });
            console.log("Profile updated:", data);
            if (data.message === "Update User Info was Successful") {
                toast.success(data.message.split(" ").slice(0, 2).join(" "), {
                  position: "top-center",
                  duration: 3000,
                  className: " text-white rounded-5",
                  style:{backgroundColor:'#3AB2A6'}
                });
              }
        } catch (error) {
            console.error("Error updating profile:", error);
            setError("Failed to update profile.");
        } finally {
            setLoading(false);
            setValues2(
                {
                    fname: '',
                    lname: '',
                    email: '',
                    password: '',
                    phone: ''
                }
            )
        }
    };   
    
    const deleteup = () => {
        setValues2(
            {
                fname: '',
                lname: '',
                email: '',
                password: '',
                phone: ''
            }
        )
    }

    useEffect(() => {
        getAccount();
    }, []);

    const setBtnOne = () => {
        setBtn1(true);
        setBtn2(false);
        setBtn3(false);
    };
    const setBtnTwo = () => {
        setBtn1(false);
        setBtn2(true);
        setBtn3(false);
    };
    const setBtnThree = () => {
        setBtn1(false);
        setBtn2(false);
        setBtn3(true);
    };

    return (
        <>
            <div className='container mt-5 px-3'>
                <div className="row">
                    <div className="d-flex justify-content-between align-items-center wrapper">
                        <div>
                            <Link to='/'>
                                <button className="fw-normal ps-5 home-slash home-slash-home border-0">Home/ 
                                </button>
                            </Link>
                            <button className='home-slash home-slash-myaccount border-0'><span className="fw-medium slash">My Account</span></button>
                        </div>
                        <div className='sign-out-btn-top'>
                            <Button className="log-out-btn" buttonStyle="btn--circular2" onClick={handleOpen2}>
                                Delete My Account
                            </Button>
                        </div>
                    </div>
                    <div className="col-md-3 mb-5 px-4">
                        <div className="card my-count-btns-card">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-semibold mt-2 ms-3 lh-base hello-msg">{`Hello ${values.fname}`}</h5>
                                <hr/>
                                <div className="d-flex flex-column flex-grow-1">
                                    <button onClick={setBtnOne} className={btn1 ? 'btn btn-myacc-active text-start fw-semibold' : 'btn btn-myacc text-start fw-semibold'}>My Account</button>
                                    <button onClick={setBtnTwo} className={btn2 ? 'btn btn-myacc-events-active text-start fw-semibold' : 'btn btn-myacc-events text-start fw-semibold'}>Events</button>
                                    <button onClick={handleOpen} className={btn3 ? 'btn btn-myacc-signout-active text-start fw-semibold' : 'btn btn-myacc-signout text-start fw-semibold'}>Sign Out</button>
                                </div>
                                <Link to='/contactus'>
                                    <Button className="log-out-btn mt-auto" buttonStyle="btn--circular">
                                        Contact Us <img src={questionmark} alt="" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                    {btn1 && 
                    <div className="col-md-9">
                        <div className="card mb-5">
                            <div className="card-body">
                                <div className="first-section-myacc-edit d-flex">
                                    <label htmlFor="exampleFormControlInput1" className="form-label my-profile-lab text-start fw-semibold lh-sm">My Profile</label>
                                    <div className="inputs-fsme w-75">
                                        <input className="form-control disabled-textfield bg-white mb-2 border-0 text-start fw-semibold lh-sm" 
                                                type="text" value={`${values.fname} ${values.lname}`} 
                                                aria-label="Disabled input example" 
                                                disabled readOnly/>
                                        <input className="form-control disabled-textfield bg-white border-0 text-start fw-semibold lh-sm" 
                                                type="text" 
                                                value={values.email} 
                                                aria-label="Disabled input example" 
                                                disabled readOnly/>
                                    </div>
                                    <QRCode
                                        size={90}
                                        bgColor='white'
                                        fgColor= '#012572'
                                        value={code}
                                    />
                                </div>
                                <hr/>
                                <div className="second-section-myacc-edit d-flex">
                                    <label htmlFor="exampleFormControlInput1" className="form-label my-profile-lab text-start fw-semibold lh-sm">General Info</label>
                                    <div className="inputs-fsme w-50 ms-5">
                                        <label htmlFor="exampleFormControlInput1" className="form-label general-info-lab text-start fw-medium lh-sm">First Name</label>
                                        <input onChange={handleChange} 
                                                className="form-control disabled-textfield bg-white mb-2 text-start fw-normal lh-sm" 
                                                type="text" 
                                                name="fname"
                                                value={values2.fname}
                                                placeholder={values.fname}
                                                />
                                        <label htmlFor="exampleFormControlInput1" className="form-label general-info-lab text-start fw-medium lh-sm">Last Name</label>
                                        <input onChange={handleChange} 
                                               className="form-control disabled-textfield bg-white text-start fw-medium lh-sm" 
                                               type="text" 
                                               name="lname"
                                               value={values2.lname}
                                               placeholder={values.lname}/>
                                        <div className="general-info-btns d-flex mt-4 justify-content-center">
                                            <Button className="" buttonStyle="btn--circular-line" onClick={deleteup}>
                                                Cancel
                                            </Button>
                                            <div className="ms-1 w-50">
                                                <button onClick={handleSubmit} buttonStyle="btn--circular2" className="save-change-btn" disabled={isButtonDisabled}>
                                                    Save Changes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <form onSubmit={handleSubmit} className="third-section-myacc-edit d-flex">
                                    <label htmlFor="exampleFormControlInput1" className="form-label my-profile-lab text-start fw-semibold lh-sm">Security</label>
                                    <div className="inputs-fsme w-50 ms-5">
                                        <div className="label-plus-change-btn d-flex justify-content-between">    
                                            <label htmlFor="exampleFormControlInput1" className="form-label general-info-lab fw-medium lh-sm">Email</label>
                                            <button type='submit' className='orange-no-border-btn border-0' disabled={isButtonDisabled}>change address</button>
                                        </div>
                                        <input onChange={handleChange}  
                                               className="form-control security-textfield bg-white mb-2 text-start fw-medium lh-sm" 
                                               type="text" name="email" 
                                               placeholder={values.email}
                                               value={values2.email}/>
                                        <div className="label-plus-change-btn d-flex justify-content-between">
                                            <label htmlFor="exampleFormControlInput1" className="form-label general-info-lab fw-medium lh-sm">Password</label>
                                            <button type='submit' className='orange-no-border-btn border-0' disabled={isButtonDisabled}>change Password</button>
                                        </div>
                                        <input onChange={handleChange}  
                                               className="form-control security-textfield bg-white text-start fw-normal lh-sm" 
                                               type="password" name="password" 
                                               value={values2.password}
                                               placeholder={"*".repeat((values.password).length)}/>
                                        <div className="label-plus-change-btn d-flex justify-content-between">
                                            <label htmlFor="exampleFormControlInput1" className="form-label general-info-lab fw-medium lh-sm">Phone number</label>
                                            <button type='submit' className='orange-no-border-btn border-0' disabled={isButtonDisabled}>change phone number</button>
                                        </div>
                                        <input onChange={handleChange}  
                                               className="form-control security-textfield bg-white text-start fw-normal lh-sm" 
                                               type="text" 
                                               name="phone"
                                               placeholder={values.phone}
                                               value={values2.phone}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
            <LogoutModal
              open={open}
              handleOpen={handleOpen}
              handleClose={handleClose}
            />
            <My_Account_Delete_Modal
              open2={open2}
              handleOpen={handleOpen2}
              handleClose={handleClose2}
            />
        </>
    );
}

export default My_Account_body;
