import React, { useState } from 'react'
import { listData } from '../../lib/dummydata';
import "./Events.css";
import { Button } from '../Button/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Membership_id_Modal from '../Membership_id_Modal';

function Events({item}) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const list = ['α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling',
                  'Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume',
                  'Hands-free Voice Control, Always Ready', 
                  'Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode',
                  'Eye Comfort Display: Low-Blue Light, Flicker-Free'];

    const urlimg = `https://health.code-faster.giize.com/storage/${item.image}`;


    return (
        <>
            <div className='container-fluid eve-container'>
                <div className='row p-md-5'>
                    <div className='col-md-5 p-'>
                        <dir className='eve-img-con'>
                            <img src={urlimg} alt="eve" className='eve-img'/>
                        </dir>
                    </div>
                    <div className='col-md-6 pt-md-4 ps-md-5'>
                        <div className='eve-text-con'>
                            <h2 className='eve-header1'>{item.title_en}</h2>
                            <ul className='eve-list'>
                                {list?.map(listitem => (
                                    <li key={listitem} className='lh-lg'>{listitem}</li>
                                ))}
                            </ul>
                            <h3 className='eve-price-text'>USD(incl. of all taxes)</h3>
                            <h3 className='eve-price-money'>$ {item.price}</h3>
                            <div className='button-container d-grid mx-auto mt-auto mb-2'>
                                <Button
                                    className='btns'
                                    buttonStyle='btn--green'
                                    onClick={handleOpen}
                                    >
                                    Book your Set
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Membership_id_Modal
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            />
        </>
    )
    }

export default Events
