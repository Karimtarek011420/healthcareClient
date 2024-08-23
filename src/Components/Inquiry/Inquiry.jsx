import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './inquiry.css';
import { Button } from '../Button/Button';
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios';
import PulseLoader from 'react-spinners/PulseLoader';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import toast from 'react-hot-toast';
import { useEffect } from 'react';
const emailRegex1 = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Inquiry() {
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [values, setValues] = useState({ name: '', phone: '', email: '', message: '' });
    const [errors, setErrors] = useState({name:''});
    const textOnlyRegex = /^[A-z]{2,23}$/;
    const [validemail1, setValidemail1] = useState(false);
    const [emailFocus1, setemailFocus1] = useState(false);
    
    useEffect(() => {
        setValidemail1(emailRegex1.test(values.email));
    }, [values.email])

    const fetchData = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('/API/Form-Request/Add', values);
            setPosts(response.data);
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
            setValues({ name: '', phone: '', email: '', message: '' });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    
        // Validation
        if (!textOnlyRegex.test(value)) {
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
        setValues((prevValues) => ({
            ...prevValues,
            phone: phone
        }));
    };
 

    return (
        <div>
            <div className='container-fluid fluid-container'>
                <div className='row'>
                    <div className='col-md-6 header-inquiry-container p-5'>
                        <h3 className='header-inquiry me-5 mx-5 mt-5'>For general inquiries and questions related to members</h3>
                        <p className='header2-inquiry mx-5'>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
                    </div>
                    <div className="col-md-6 p-3">
                        <form onSubmit={fetchData}>
                            <div className='form-inquiry p-3'>
                                <div className="row mb-2">
                                    <div className="col-md-6">
                                        <label htmlFor="nameInput" className="form-label">Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="nameInput"
                                            placeholder="Your Name"
                                            aria-label="name"
                                            name="name"
                                            value={values.name}
                                            onChange={handleChange}/>
                                        <div style={{backgroundColor:'#000', borderRadius:'5px',marginTop:'10px'}}>
                                            {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                                            {errors.name && <span style={{ color: 'white',fontSize:'15px'}} className='p-1'>{errors.name}</span>}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="phoneInput" className="form-label">Phone</label>
                                        <PhoneInput
                                            defaultCountry="sa"
                                            id="phoneInput"
                                            placeholder="(123) 456 7890"
                                            aria-label="Phone"
                                            name="phone"
                                            value={values.phone}
                                            onChange={handlePhoneChange}
                                            className="form-control phoneinput p-1"
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col mb-2">
                                    <label htmlFor="emailInput" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control form-email"
                                        id="emailInput"
                                        placeholder="example@email.com"
                                        aria-label="email"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        aria-invalid={validemail1 ? "false" : "true"}
                                    onFocus={() => setemailFocus1(true)}
                                    onBlur={() => setemailFocus1(false)}
                                    />
                                     <p id="confirmnote" className={emailFocus1 && !validemail1 ? "instructions" : "offscreen"}>
                                    <FontAwesomeIcon icon={faInfoCircle} />
                                    Allowed Email Pattern Username<span aria-label="at symbol">@</span>site<span aria-label="hashtag">.</span>com
                                    </p>
                                </div>
                                <div className="col mb-2">
                                    <label htmlFor="messageInput" className="form-label">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="messageInput"
                                        rows="3"
                                        name="message"
                                        value={values.message}
                                        onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className='mb-2 mx-auto'>
                                    <Button
                                        className='btns'
                                        buttonStyle='btn--circular2'
                                        type="submit"
                                    >
                                        {loading ? <PulseLoader className='mt-1' size='16' color='white' /> : "Send Message"}
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Inquiry;
