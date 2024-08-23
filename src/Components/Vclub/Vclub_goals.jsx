import './Vclub_goals.css'
import React from 'react'
import pic1 from '../../assets/vclubgoals.png'

function Vclub_goals() {
  return (
    <div className='container py-5'>
        <div className="row">
            <div className="col-md-6">
                <p className='vc-e1-p1 text-start fw-medium'>Goals of</p>
                <h3 className='vc-e1-header text-start fw-bold py-1 pb-4'>The Volunteer Club</h3>
                <ul className='vc-e1-p2 lh-base text-start fw-normal'>
                    <li>
                        Develop a healthy environment, enhance education, and support community and cultural activities in the Health Information Management community.
                    </li>
                    <li>
                        Promote cooperation and communication through organizing events.
                    </li>
                    <li>
                        Develop the skills of members of the Health Information Management community through participation in volunteer activities.
                    </li>
                    <li>
                        Provide opportunities for members to learn new skills, such as leadership, planning, organization, problem-solving, and interpersonal relations.
                    </li>
                    <li>
                        Offer volunteering opportunities for individuals who wish to contribute to the Health Information Management community.
                    </li>
                </ul>
            </div>
            <div className='col-md-6'>
                <div className="py-1">
                    <img src={pic1} className='img-con-vc'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Vclub_goals
