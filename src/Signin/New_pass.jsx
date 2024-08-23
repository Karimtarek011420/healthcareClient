import { useRef, useState, useEffect, useContext} from "react";
import axios from '../api/axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import logo from '../assets/logo.png';
import Rec from '../assets/bg.png';
import {Link} from 'react-router-dom';
import close from '../assets/close2.svg';
import AuthContext from '../Context/AuthProvider';
import '../Signup/Register.css';
import './Login.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LOGIN_URL ='/login';

const New_pass = (props) => {
    
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate passwords
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // API call to reset password
    // You can adjust this depending on your API structure
    const resetPasswordApi = async () => {
      try {
        const response = await fetch('/API/Auth/ResetPassword', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: JSON.stringify({ password }),
        });
        console.log(response);
        

        if (response.ok) {
          setSuccess('Password reset successfully!');
        } else {
          setError('Failed to reset password. Try again.');
        }
      } catch (err) {
        setError('Something went wrong. Please try again later.');
      }
    };

    resetPasswordApi();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

    return (
        <>
                <div className="">
                    <section className="container-fluid reg-bg-con">
                        <div className="row vh-100">
                            <div className="col-md-12 col-sm-12">
                                <div className="form-container-log">
                                    <div className="inner">
                                        <div className="close-btn-container">
                                            <Link to="/" className='no-underline-close'><img src={close} onClick={props.onClose}/>
                                            </Link> 
                                        </div>
                                        {/* <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p> */}
                                        <div className="row">
                                            <div className="col-12 d-flex justify-content-between align-items-center">
                                                <h1 className="title mx-auto text-center fw-semibold">New Password</h1>
                                            </div>
                                        </div>
                                        <form onSubmit={handleSubmit} className="ms-4 me-4">
                                            <label className="label--log" htmlFor="password">
                                                Password:
                                            </label>
                                            <div className="d-flex">  
                                              <input
                                                  placeholder="********"
                                                  className="form-control mt-2"
                                                  type="password"
                                                  id="password"
                                                  required
                                                  onChange={handlePasswordChange}
                                                  value={password}
                                              />
                                              <p>&nbsp;</p>
                                              <button 
                                                  type="button" 
                                                  className="eyebutton p-0 m-0 mt-2 px-1" 
                                                  onClick={togglePasswordVisibility}
                                                  aria-label={showPassword ? "Hide password" : "Show password"}>
                                                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className=""/>
                                              </button>
                                            </div>
                                            <label className="label--log" htmlFor="confirm password">
                                                New Password:
                                            </label>
                                            <div className="d-flex">
                                              <input
                                                  placeholder="********"
                                                  className="form-control mt-2"
                                                  type="password"
                                                  id="password"
                                                  required
                                                  onChange={handleConfirmPasswordChange}
                                                  value={confirmPassword}
                                                  
                                              />
                                              <p>&nbsp;</p>
                                              <button 
                                                  type="button" 
                                                  className="eyebutton p-0 m-0 mt-2 px-1" 
                                                  onClick={togglePasswordVisibility}
                                                  aria-label={showPassword ? "Hide password" : "Show password"}>
                                                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className=""/>
                                              </button>
                                            </div>
                                            {error && <p style={{ color: 'red' }}>{error}</p>}
                                            {success && <p style={{ color: 'green' }}>{success}</p>}
                    
                                            <button className="btn submit mt-4">Submit</button>
                                            {/**!validemail || !validpassword */}
                                            <p className="line mt-2">
                                                Don't have an Account?&nbsp;
                                                <span className="line">
                                                    <Link onClick={() => props.setcurrentPage("register")}>Sign Up</Link>
                                                </span>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
        </>
               
    )
}

export default New_pass