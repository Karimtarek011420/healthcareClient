import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Spkrs.css';
import { Link } from 'react-router-dom';
import fb from "../../../assets/fb.svg";
import tw from "../../../assets/tw.svg";
import dr from "../../../assets/dr.svg";


function Spkrs({item}) {
    const urlimg = `https://health.code-faster.giize.com/storage/${item.image}`;


  return (
    <div className="container card mb-2 mt-3">
        <div className="row mt-5">
            <div className="col-md-12">
                <div className="spkrs-img-container mx-auto">
                    <img src={urlimg} alt="speaker" className='spkrs-img'/>  
                </div>
            </div>
            <div className="col-md-12 mt-5">
                <div className="spkrs-text-container pe-5 ">
                    <h6 className='spkr-name pe-5 lh-lg text-start'>{item.name_en}</h6>  
                    <h5 className='spkr-job-title pe-5 me-5 lh-lg'>{item.title_en}</h5>
                    <p className='spkr-paragraph pe-5 me-5 lh-base'>{item.short_desc_en}</p>
                    <div className='socials'>
                        <Link to='/' className='no-underline text-navy'><img src={fb} size="sm" />&nbsp;&nbsp;</Link>
                        <Link to='/' className='no-underline text-navy'><img src={tw} size="sm"/>&nbsp;&nbsp;</Link>
                        <Link to='/' className='no-underline text-navy'><img src={dr} size="sm"/></Link>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <p className='desc-parag lh-base text-start'>{item.describtion}</p>
            </div>
        </div>
    </div>
  )
}

export default Spkrs
