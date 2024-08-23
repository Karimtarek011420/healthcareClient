import React, { useEffect, useState } from 'react'
import './Contact_us_form.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Button } from '../Button/Button';
import email from '../../assets/email.png';
import axios from 'axios';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import PulseLoader from 'react-spinners/PulseLoader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';


const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Contact_us_form() {

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [values, setvalue] = useState({ fname: '', lname: '', phone:'', email:'', message:''});
    const [errors, setErrors] = useState({ fname: '',lname: '' });
    const [isChecked, setIsChecked] = useState(false);
    const textOnlyRegex = /^[A-z]{1,23}$/;
    const [validemail, setValidemail] = useState(false);
    const [emailFocus, setemailFocus] = useState(false);

    

    const fetchData = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response =  await axios.post('/API/Form-Contact/Contact', values);
            setPosts(response.data);
            setIsChecked(false);
            toast.success("message send Successfully", {
                position: "top-center",
                duration: 2000,
                className: " text-white rounded-5",
                style:{backgroundColor:'#3AB2A6'}
              })
        } catch (err) {
            setError(err);
            toast.error("please fill form", {
                position: "top-center",
                duration: 2000,
                className: " text-white",
                style:{backgroundColor:'#3AB2A6'}
              })
        } finally {
            setLoading(false);
            setvalue({ fname: '', lname: '', phone:'', email:'', message:'' });

        }
    }; 

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setvalue({ ...values, [name]: value });
    
        // Validation
        if (!textOnlyRegex.test(value)||isChecked) {
          setErrors({
            ...errors,
            [name]: '2 to 24 characters. Only Letters are Allowed.'
          });
        } else {
          setErrors({
            ...errors,
            [name]: ''
          });
          setErrors('')

        }
    };

    const handlePhoneChange = (phone) => {
        setvalue((prevValues) => ({
            ...prevValues,
            phone: phone
        }));
    };
    

    useEffect(() => {
        setValidemail(emailRegex.test(values.email));
    }, [values.email])
    return (
        <>
        <div className="container ">
            <div className="row my-5">
                <h3 className='contact-us-header fw-bold lh-base text-center'>Contact us</h3>
                <p className='contact-us-paragraph lh-base text-center mb-5'>We would like to hear from you!</p>
                <div className="col-md-6 align-items-center">
                    <div className="contact-us-img-wrapper">
                        <img src={email} alt="" className='align-self-center w-100'/>
                    </div>
                </div>
                <div className="col-md-6">
                    <form onSubmit={fetchData}>
                        <div className='form-contactus'>
                            <div className="row mb-2">
                                <div className="col-md-6">
                                    <label htmlFor="nameInput1" className="form-label form-contact-us-lab  ">First Name</label>
                                    <input type="text" 
                                        className="form-control form-conatct-us-ins" 
                                        id="nameInput1" 
                                        placeholder="first name" 
                                        aria-label="Name"
                                        name='fname' 
                                        value={values.fname} 
                                        onChange={handleChange}/>
                                        <div className="mt-2">
                                            <div style={{backgroundColor:'#000', borderRadius:'5px'}}>
                                                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                                {errors.fname && <span style={{ color: 'white',fontSize:'15px'}} className='p-1'>{errors.fname}</span>}
                                            </div>    
                                        </div> 
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="nameInput2" className="form-label form-contact-us-lab  ">Last Name</label>
                                    <input type="text" 
                                        className="form-control form-conatct-us-ins" 
                                        id="nameInput2" 
                                        placeholder="last name" 
                                        aria-label="Name" 
                                        name='lname'
                                        value={values.lname} 
                                        onChange={handleChange}/>
                                        <div className="mt-2">
                                            <div style={{backgroundColor:'#000', borderRadius:'5px'}} >
                                                {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                                {errors.lname && <span style={{ color: 'white',fontSize:'15px'}} className='p-1'>{errors.lname}</span>}
                                            </div> 
                                        </div>  
                                </div>
                            </div>
                            <div class="col mb-2">
                                <label htmlFor="emailInput" className="form-label form-contact-us-lab  ">Email address</label>
                                <input type="email" 
                                    className="form-control form-conatct-us-ins form-email" 
                                    id="emailInput" 
                                    placeholder="you@company.com" 
                                    aria-label="email" 
                                    name='email'
                                    value={values.email} 
                                    onChange={handleChange}
                                    required
                                    aria-invalid={validemail ? "false" : "true"}
                                    onFocus={() => setemailFocus(true)}
                                    onBlur={() => setemailFocus(false)}
                                    />
                                     <p id="confirmnote" className={emailFocus && !validemail ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Allowed Email Pattern Username<span aria-label="at symbol">@</span>site<span aria-label="hashtag">.</span>com
                                    </p>

                            </div>
                            <div class="col mb-2">
                                <label htmlFor="phoneInput" className="form-label form-contact-us-lab  ">Phone Numaber</label>
                                <PhoneInput
                                    defaultCountry="sa"
                                    id="phoneInput"
                                    placeholder="(123) 456-7890"
                                    aria-label="Phone"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handlePhoneChange}
                                    className="form-control phoneinput phonecontect p-1 mt-2"
                                    required
                                />
                            </div>
                            <div className="col mb-2">
                                <label for="exampleFormControlTextarea1" className="form-label form-contact-us-lab">Message</label>
                                <textarea className="form-control form-conatct-us-ins" 
                                id="exampleFormControlTextarea1" 
                                rows="3" 
                                name='message'
                                value={values.message} 
                                onChange={handleChange}></textarea>
                            </div>
                            <div className='form-check mb-3'>
                                <input className="form-check-input mt-3" type="checkbox" 
                                value="" id="defaultCheck1"
                                onChange={handleCheckboxChange}
                                checked={isChecked}
                                />
                                 <label className="form-check-label mt-3" for="defaultCheck1">
                                    &nbsp; You agree to our friendly <Link to='/'>privacy policy</Link>.
                                </label>
                            </div>
                            <div className='mb-2'>
                                <Button disabled
                                    className='btns'
                                    buttonStyle='btn--orange'
                                    type="submit">
                                    {loading ? <PulseLoader className='mt-1' size='16' color='white'/>:
                                        "Send Message"}
                                </Button>
                            </div>
                         
                        </div>
                    </form>
                </div>
                
            </div>
        </div>
    </>
  )}

export default Contact_us_form
