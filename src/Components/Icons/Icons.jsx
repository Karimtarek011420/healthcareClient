import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import icon6 from '../../assets/icon6.png';
import icon7 from '../../assets/icon7.png';
import icon8 from '../../assets/icon8.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import "swiper/css";
import "swiper/css/free-mode"
import "./swiper.css"

const Icons = () => {
  return (
    <div className='container-fluid py-4 px-4 text-center justify-content-center ' id='Partners'>
      <h3 className='header2 p-1 mt-3 text-center fw-bold'>Partners</h3>
      <div className="row">
        <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode]}
          className='mySwiper'
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },}}>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon1} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon2} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon3} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon4} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon5} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon6} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon7} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="icons-image-con mx-auto">
              <img src={icon8} alt="" className="icon-images" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>    
    </div>
  )
}

export default Icons
