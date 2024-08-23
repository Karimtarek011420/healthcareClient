import React from 'react'
import man from '../../assets/dart.svg';
import './Au_Element2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Au_Element2() {
  return (
    <div className='container-fluid au-e2-container'>
        <div className='row'>
            <div className='col-md-6'>
                <div className="card au-card">
                    <div className='au-e2-img-con'>
                        <img src={man} className="au-img-man" alt="..."/>
                    </div>
                    <div className="card-body">
                        <h5 className="au-card-title fw-bold text-center">Hussein Albishi</h5>
                        <p className="au-card-text fw-normal text-center">chairman of the Saudi Health 
                        Information Management Association</p>
                    </div>            
                </div>
            </div>
            <div className="col-md-6 px-2 pt-4">
                <p className='au-paragraph-wrapper lh-base text-start fw-normal'>The Saudi Health Information Management Association (SHIMA) is dedicated to advancing the health information management profession. We achieve this by facilitating career development, fostering professional networks, and providing comprehensive educational resources. Our commitment to excellence drives our efforts to support practitioners throughout their careers.
                At SHIMA, we cover a wide range of topics related to health information management, including PII coding, document verification, data analysis, electronic health records, and patient information management. We are dedicated to nurturing scientific and professional thought in the field of health information management, and we strive to enhance the scientific and occupational performance of our members.
                Our association is committed to facilitating the exchange of scientific yield and occupational ideas among institutions and authorities locally and abroad. We provide consultation, conduct necessary studies, and contribute to setting, implementing, and maintaining standards for professional practice in health information management and health coding. Additionally, we aim to raise public awareness of health and contribute to the overall improvement of health information systems.</p>
            </div>
            {/* <div className='row px-2'>
                <p className='au-paragraph-wrapper lh-base text-start fw-normal'>
                    Moreover, SHIMA also aims towards encouraging the writing and translation of books and articles to serve the purpose of establishing a scientific database for HIM and relevant fields. Furthermore, SHIMA promotes developing the skills of HIM employees all over the Kingdom through providing scholarships for outstanding students.
                    SHIMA assures its consistent commitment to making more efforts to serve the healthcare field in Saudi Arabia through promoting cooperation between both public and private sectors, supporting communication between key stakeholders keeping track of national and international updates and seeking the goal of creating a reliable environment in healthcare field; all of which will have a significant impact over healthcare field advancement under the guidance of His Royal Highness, The Custodian of The Two Holy mosques King Salman Bin Abdulaziz Al-Saud and His Royal Highness Crown Prince.            
                </p>
            </div> */}
        </div>
    </div>
  )
}

export default Au_Element2
