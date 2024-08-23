import React from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import fb from "../../../assets/fb1.svg";
import tw from "../../../assets/tw1.svg";
import dr from "../../../assets/dr1.svg";
import './card.css';
import cube from "../../../assets/BOD1.svg";


function card({item}) {
    const urlimg = `https://health.code-faster.giize.com/storage/${item.image}`;


  return (
    <div>
        <div className="card board-card col-md mb-4 mx-2">
            <div className="row flex-column flex-md-row">
                <div className="col-md-4 imageContainer-bod">
                    <img src={urlimg} className="img-fluid bod-card-img-top rounded-start" alt="..."/>
                </div>
                <div className="col-md-8 textContainer-bod">
                    <div className="card-body">
                        <h5 className="card-title bod-header1 fw-semibold text-start">{item.name_en}</h5>
                        <h5 className="card-text bod-header2 fw-medium text-start">{item.title_en}</h5>
                        <p className="card-text bod-header3 fw-medium text-start"><small className="text-body-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</small></p>
                        {/* {item.desc_en} */}
                        <div className='socials text-start mt-lg-2'>
                            <Link to='/' className='no-underline text-navy'><img src={fb} size="lg" />&nbsp;&nbsp;</Link>
                            <Link to='/' className='no-underline text-navy'><img src={tw} size="sm"/>&nbsp;&nbsp;</Link>
                            <Link to='/' className='no-underline text-navy'><img src={dr} size="sm"/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default card
