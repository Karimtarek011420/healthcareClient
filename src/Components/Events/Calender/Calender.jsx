import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-multi-carousel/lib/styles.css';
import { listData } from '../../../lib/dummydata';
import Card from './card/card';
import "./Calender.css"; // Make sure to import the custom CSS file
import axios from 'axios';
import { useEffect, useState } from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

function Calender() {
  const client = axios.create({
    baseURL: "/API/Events/All"
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Step 1: Create loading state

  useEffect(() => {
    setLoading(true); // Step 2: Set loading to true before API call
    client.get()
      .then((response) => {
        setPosts(response.data.data);
      })
      .finally(() => {
        setLoading(false); // Step 3: Set loading to false after API call
      });
  }, []);


  
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedData = chunkArray(posts, 3);
  
  return (
    <div className='container-fluid mb-5'>
      <div className='row col-md-7 mt-3 mx-auto'>
        <h3 className='cal-header fw-bold text-center lh-base mt-5'>
           Events<span className='cal2-header fw-bold text-center lh-base'> Calendar</span>
        </h3>
        <p className='cal-paragraph fw-normal text-center lh-lg'>
          Registration process with check-in for payment. Several different activities are offered that fall under the umbrella of the association, including conferences, workshops, training courses, and many other activities.
        </p>
      </div>
      
      {loading ?
          <PropagateLoader className='text-center' color="#3CB7A8"/>
        :
        <div className='row car-row justify-content-center'>
        <div className='wrapper col-md-12'>
          <div id="carouselExample" className="carousel slide position-relative mb-5">
            <div className="carousel-inner mb-1">
              {chunkedData.map((chunk, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="d-flex justify-content-center">
                    {chunk.map((item) => (
                      <div className="mx-2" key={item.id}>
                        <Card item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/**style="bottom: 10px; left: 10%;" */}
            <div className='nextandprev mx-auto'>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next ms-3" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        {/* <div className='blue-circle position-absolute'>
          <img src={bluecircle} alt="blue circle" className='blue-circle-img'></img>
        </div> */}
      </div>  
      }
    </div>
  );
}

export default Calender;



{/* import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import placeholder from '../../assets/calplaceholder.svg';
import "./Calender.css";
import { listData } from '../../lib/dummydata';
import Card from './card/card';


function Calender() {
  const data = listData;
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };
  const chunkedData = chunkArray(data, 3);
  return (
    <div>
      <div className='container-fluid'>
        <div className='row mt-3'>
          <h3 className='cal-header'>Our <span className='cal2-header'>Activities Calendar</span></h3>
        </div>
        <div className='row car-row justify-content-center'>
          <div className='wrapper col-md-12 mt-0 mb-3 mx-auto'>
            <div id="carouselExampleIndicators" className="carousel slide">
              <div className="carousel-indicators">
                <div className="carousel-inner">
                  {chunkedData.map((chunk, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                      <div className="d-flex justify-content-center">
                        {chunk.map((item) => (
                          <div className="col-md-4 mx-2" key={item.id}>
                          <Card item={item} />
                      </div>                        
                    ))}
                      </div>
                    </div>
                  ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next text-black" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon text-black" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/}

/** const client = axios.create({
    baseURL: "http://health.code-faster.giize.com/API/Events/All"
  });

  const [posts, setPosts] = useState([]);

   useEffect(() => {
      client.get().then((response) => {
         setPosts(response.data.data);
      });
      
   }, []);

  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   // Handler to call on window resize
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  // })

  

  const data = listData;

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedData = chunkArray(posts, 3);

  return (
    <div className='container-fluid mb-5'>
      <div className='row col-md-7 mt-3 mx-auto'>
        <h3 className='cal-header fw-bold text-center lh-base mt-5'>
           Events<span className='cal2-header fw-bold text-center lh-base'> Calendar</span>
        </h3>
        <p className='cal-paragraph fw-normal text-center lh-lg'>
        Registration process with check-in for payment. Several different activities are offered that fall under the umbrella of the association, including conferences, workshops, training courses, and many other activities.
        </p>
      </div>
      
      <div className='row car-row justify-content-center'>
        <div className='wrapper col-md-12'>
          <div id="carouselExample" className="carousel slide position-relative mb-5">
            <div className="carousel-inner mb-1">
              {chunkedData.map((chunk, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                  <div className="d-flex justify-content-center">
                    {chunk.map((item) => (
                      <div className="mx-2" key={item.id}>
                        <Card item={item} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div> */