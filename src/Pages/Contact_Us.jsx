import React from 'react'
import Contact_us_hero from '../Components/Contact_us/Contact_us_hero'
import Navbar_animated from '../Components/NabarTest/Navbar_animated'
import Footer from '../Components/Footer_v1/Footer'
import Contact_us_form from '../Components/Contact_us/Contact_us_form'


function Contact_Us() {
  return (
    <>
        <Navbar_animated page={false}/>
        <Contact_us_hero/>
        <Contact_us_form/>
        <Footer/>
    </>
  )
}

export default Contact_Us
