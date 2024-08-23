import React from 'react'
import Navbar_animated from '../Components/NabarTest/Navbar_animated'
import My_Account_Hero from '../Components/My_Account/My_Account_Hero'
import My_Account_body from '../Components/My_Account/My_Account_body'
import Footer from '../Components/Footer_v1/Footer'


function My_Account() {
  return (
    <>
        <Navbar_animated page={false}/>
        <My_Account_Hero/>
        <My_Account_body/>
        <Footer/>
    </>
  )
}

export default My_Account
