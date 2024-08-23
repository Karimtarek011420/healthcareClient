import React from 'react'
import Navbar_animated from '../Components/NabarTest/Navbar_animated'
import Volclub_hero from '../Components/Vclub/Volclub_hero'
import Vclub_goals from '../Components/Vclub/Vclub_goals'
import Vclub_committe from '../Components/Vclub/Vclub_committe'
import Join_us from '../Components/Vclub/Join_us'
import Footer from '../Components/Footer_v1/Footer'


function voulenter_club_page() {
  return (
    <>
        <Navbar_animated page={false}/>
        <Volclub_hero/>
        <Vclub_goals/>
        <Join_us/>
        <Vclub_committe/>
        <Footer/>
    </>
  )
}

export default voulenter_club_page
