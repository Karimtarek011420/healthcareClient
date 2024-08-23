import React from 'react'
import Footer from '../Components/Footer_v1/Footer'
import Navbar_animated from '../Components/NabarTest/Navbar_animated'
import Agenda_hero from '../Components/Agenda/Agenda_hero'
import Agenda_hero2 from '../Components/Agenda/Agenda_hero2'
import Day_Calender from '../Components/Agenda/Day_Calender'


function Agenda() {
  return (
    <>
        <Navbar_animated page={false}/>
        <Agenda_hero/>
        <Agenda_hero2/>
        <Day_Calender/>
        <Footer/>
    </>
  )
}

export default Agenda
