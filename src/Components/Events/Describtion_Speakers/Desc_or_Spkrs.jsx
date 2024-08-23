import React,{useState} from 'react'
import './Desc_or_Spkrs.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { listData } from '../../../lib/Spkrs';
import Spkrs from './Spkrs';


function desc_or_Spkrs({item}) {
    const data = listData;
    const [isDescOpen, setisDescOpen] = useState(true);
    const [isSpkrsOpen, setisSpkrsOpen] = useState(false);

  return (
    <div className='container desc-or-spkrs-con'>
        <div className='row p-1 ms-1'>
            <p className="d-inline-flex gap-3">
                <button className={isDescOpen ? 'desc-btn-open text-start': 'desc-btn text-start'} onClick={()=>{setisDescOpen(true); setisSpkrsOpen(false)}}>Description</button>
                <button className={isSpkrsOpen ? 'spkrs-btn-open text-start': 'spkrs-btn text-start'} onClick={()=>{setisDescOpen(false); setisSpkrsOpen(true)}}>Speakers</button>
            </p>
            {isDescOpen&&!isSpkrsOpen ? 
            <>
                <div className="row">
                    <p className='desc-parag lh-lg text-start'>{item.long_desc_en}</p>
                </div>
            </>
            :
            <>
                {item.speakers.map((speaker) => {
                    return(
                        <div className='col-md-6'>
                            <Spkrs key={speaker.id} item={speaker} className="speakers" />
                        </div>
                    )
                    
                })}

            </>}
        </div>
    </div>
  )
}

export default desc_or_Spkrs
