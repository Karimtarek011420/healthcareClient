import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import circles from '../../assets/circles.svg';
import './Element_1.css';
import Section1 from './Section1';
import Section2 from './Section2';


function Element_1() {
  return (
    <div className='container-fluid my_container '>
      <Section1 className="justify-content-center"/>
      <Section2 className='justify-content-center'/>
    </div>
  )
}

export default Element_1