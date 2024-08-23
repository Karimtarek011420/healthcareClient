import React from 'react'
import './card.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Button } from '../../../Button/Button';
import time from '../../../../assets/cal_icon.svg';
import date from '../../../../assets/watch.svg';
import loc from '../../../../assets/location.svg';
import cube from '../../../../assets/cube2.svg';


function card({item}) {
    const urlimg = `https://health.code-faster.giize.com/storage/${item.image}`;

  return (
    <div className="card card-cal" >
        <Link to='/events'
            state={item.code}
            className='imageContainer'>
            <img src={urlimg} className="card-img-top" alt="..."/>
        </Link>
        <div className="card-body">
            <div className='row textContainer'>
                <h5 className="card-title header--card fw-bold lh-sm text-start">{item.title_en}</h5>
                <p className="card-text paragraph--card fw-normal lh-base text-start">{item.short_desc_en}</p> 
                <hr/>   
                <div className="scnd-section px-2">
                    <div className="date-and-time">
                        <div className="date">
                            <p className='data-time-loc-text fw-medium lh-sm me-5'><img src={time} alt="" className='text-start'/>&nbsp;{item.from_time}</p>
                        </div>
                        <div className="time">
                            <p className='data-time-loc-text fw-medium lh-sm'><img src={date} alt="" className='text-end'/>&nbsp;{item.date_details}</p>
                        </div> 
                    </div>
                    <div className="location">
                        <p className='data-time-loc-text fw-medium lh-sm'><img src={loc} alt="" />&nbsp;{item.location}</p>
                    </div>
                </div>
            </div>
            <div className='button-container mx-auto mt-auto mb-2'>
                <Button
                    className='btns book_now_btn'
                    buttonStyle='btn--green'
                    onClick={console.log('hey')}
                    >
                    Book your Set
                </Button>
            </div>
        </div>
    </div>
  )
}

export default card
