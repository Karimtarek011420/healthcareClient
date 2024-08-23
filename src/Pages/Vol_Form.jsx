import React from 'react'
import Navbar_animated from '../Components/NabarTest/Navbar_animated'
import Volclub_hero from '../Components/Vclub/Volclub_hero'
import Footer from '../Components/Footer_v1/Footer'
import Vclub_Form from '../Components/Vclubform/Vclub_Form'


function Vol_Form() {
  return (
    <>
        <Navbar_animated page={false}/>
        <Volclub_hero/>
        <Vclub_Form/>
        <Footer/>
    </>
  )
}

export default Vol_Form
