import React from 'react'
import './Vclub_committe.css'
import pic1 from '../../assets/comitte.png'

function Vclub_committe() {
  return (
    <div className='container-fluid py-md-5 px-md-5 mt-5 ms-0 me-0'>
        <div className="row">
            <div className='col-md-6'>
                <div className="vc-img-con">
                    <img src={pic1} className='img-con-vcsc mb-3'/>
                </div>
            </div>
            <div className="col-md-6 mx-auto">
                <h3 className='vc-e1-header ms-2 fw-bold pt-4 pb-4'>Scientific Committee:</h3>
                <ul className='vc-e1-p2 text-start '>
                    <li>
                        The Scientific Committee is responsible for organizing and managing the specialized scientific activities of the association, such as seminars and conferences. It oversees planning and executing the specialized scientific events organized by the association. 
                    </li>
                    <li>
                        The Scientific Committee focuses on developing plans and programs for the specialized scientific activities conducted by the association.
                    </li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Vclub_committe
