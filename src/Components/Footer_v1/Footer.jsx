import React, { useContext, useState } from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import logo_white from '../../assets/logo_white.svg';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import lang from '../../assets/language.svg';
import { IoIosGlobe } from "react-icons/io";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LangContext from '../../Context/LangProvider';

function Footer() {
  // const [english, setenglish] = useState(true);
  let {english,setenglish} = useContext(LangContext);


  return (
    <div className="container-fluid fluid-container">
      <div className="inner_container">
        <div className='row footer-subscription '>
          <div className="newsletter col-md-6" >
            <p className='footer-subscription-heading'>
              Join Our Newsletter</p>
            <p className='footer-subscription-text'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className='row footer-links'>
          <div className='footer-link-items col-md-3 mt-2'>
            <div className="logo_white w-100">
              <img src={logo_white} className='w-75'></img>
            </div>
          </div>
          <div className='footer-link-items col-md-3 mt-5'>
            <h5 className='footer-col-head mb-3'>Main Page</h5>
            <Link to='/' className='no-underline footer-text'><p className='text-white'>Home</p></Link>
            <Link to='/about-us' className='no-underline footer-text'><p className='text-white'>About Us</p></Link>
            <Link to='/agenda' className='no-underline footer-text'><p className='text-white'>Agenda</p></Link>
          </div>
          <div className='footer-link-items col-md-3 mt-5'>
            <h5 className='footer-col-head mb-3'>About Us</h5>
            <Link to='/about-us' className='no-underline footer-text'><p className='text-white'>About Shima</p></Link>
            <a href='#Chairmen' className='no-underline footer-text'><p className='text-white'>Message From Chairmen</p></a>
            <a href='#Partners' className='no-underline footer-text'><p className='text-white'>Our Partners</p></a>
          </div>
          <div className='footer-link-items col-md-3 mt-5'>
            <h5 className='footer-col-head mb-3'>Membership</h5>
            <Link to='/membership' className='no-underline footer-text'><p className='text-white'>Active Member</p></Link>
            <Link to='/membership' className='no-underline footer-text'><p className='text-white'>Affiliate Member</p></Link>
            <Link to='/membership' className='no-underline footer-text'><p className='text-white'>Student Member</p></Link>
            <div className="row">
              {
                english ?
                <>
                <button type="button" className='btn language-btn border-0 text-start footer-text'><img src={lang} onClick={() => setenglish(false)}/> ENGLISH</button>
                </>
                :
                <>
                <button type="button" className='btn language-btn border-0 text-start footer-text'>العربيه <img src={lang} onClick={() => setenglish(true)}/></button>

                </>
              }
            </div>
          </div>
        </div>

        <hr className='seperator'/>
        <div className='row social-media-wrap'>
          <div className='rights col-md-3'> 
            <p>© 2023 Relume. All rights reserved</p>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Privacy Policy</p></Link>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Terms of Service</p></Link>
          </div>
          <div className='col-md-2'>
            <Link to='/' className='no-underline'><p className='text-white'>Cookies Settings</p></Link>
          </div>
          <div className='col-md-2 offset-md-1'>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faFacebook} size="lg" />&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faInstagram}size="lg"/>&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faTwitter} size="lg"/>&nbsp;&nbsp;</Link>
            <Link to='/' className='no-underline text-white'><FontAwesomeIcon icon={faLinkedin} size="lg"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;