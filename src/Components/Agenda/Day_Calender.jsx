import React, { useEffect, useState } from 'react';
import './Day_Calender.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import right from '../../assets/right.png';
import left from '../../assets/left.png';
import { listData } from '../../lib/dummydata.jsx';
import Card from './card/card.jsx';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';
// import PropagateLoader from 'react-spinners/PropagateLoader';




function Day_Calender() {

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

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mmIndex = today.getMonth();
    const month = ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const yyyy = today.getFullYear();
    const formattedToday = `${dd} ${month[mmIndex]} ${yyyy}`;
    const flag = false;
    const nextSevenDays = [];
    nextSevenDays.push(formattedToday);
    const [count, setcount] = useState(0);
    const btnarr = [count, (count + 1) % 7, (count + 2) % 7];

    for (let i = 1; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);

        const nextDd = String(nextDay.getDate()).padStart(2, '0');
        const nextMmIndex = nextDay.getMonth();
        const nextYyyy = nextDay.getFullYear();

        const formattedNextDay = `${nextDd} ${month[nextMmIndex]} ${nextYyyy}`;
        nextSevenDays.push(formattedNextDay);
    }

    const data = listData;
    const [btn, setbtn] = useState({ 
        btn1: true, 
        btn2: false, 
        btn3: false, 
        btn4: false, 
        btn5: false, 
        btn6: false, 
        btn7: false });    

    const previous = () => {
        const btnnum = (count - 1 + 7) % 7;
        setcount(btnnum);
        updatebtns(btnnum);
    };

    const next = () => {
        const btnnum = Math.abs((count + 1) % 7);
        setcount(btnnum);
        updatebtns(btnnum);
    };

    const updatebtns = (btnnum) => {
        const newBtnState = {
            btn1: btnnum === 0,
            btn2: btnnum === 1,
            btn3: btnnum === 2,
            btn4: btnnum === 3,
            btn5: btnnum === 4,
            btn6: btnnum === 5,
            btn7: btnnum === 6,
        };
        setbtn(newBtnState);
    };

    const handleClick = (buttonName) => {
        setbtn({
            btn1: false,
            btn2: false,
            btn3: false,
            btn4: false,
            btn5: false,
            btn6: false,
            btn7: false,
            [buttonName]: true, // Activate only the clicked button
        });
    };

    const btndisplay = () => {
        return(
            <>
                <button onClick={() => handleClick(`btn${btnarr[0] + 1}`)} className={btn[`btn${btnarr[0] + 1}`] ? 'btn-day-active px-3 mb-2' : 'btn-day me-2'}>
                    {nextSevenDays[btnarr[0]]}
                </button>
                <button onClick={() => handleClick(`btn${btnarr[1] + 1}`)} className={btn[`btn${btnarr[1] + 1}`] ? 'btn-day-active px-3 mb-2' : 'btn-day me-2'}>
                    {nextSevenDays[btnarr[1]]}
                </button>
                <button onClick={() => handleClick(`btn${btnarr[2] + 1}`)} className={btn[`btn${btnarr[2] + 1}`] ? 'btn-day-active px-3 mb-2' : 'btn-day me-2'}>
                    {nextSevenDays[btnarr[2]]}
                </button>
            </>        )
    }

    return (
        <div className="container day_cal_con">
            <div className="btn-nex-prev text-end">
                <button className='btn-prev-dc me-2' onClick={previous}><FaArrowLeft /></button>
                <button className='btn-nex-dc' onClick={next}><FaArrowRight /></button>
            </div>
            <div className="row justify-content-center mb-5">
                <div className="col-md-9">
                    <div className="btn-three-days text-center fw-normal lh-base">
                        {
                            btndisplay()
                        }
                    </div>
                </div>
            </div>
            <div className="row mb-5 justify-content-center">
                {btn.btn1 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[0]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}

                {btn.btn2 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[1]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}

                {btn.btn3 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[2]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}
                
                {btn.btn4 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[3]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}
                
                {btn.btn5 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[4]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}

                {btn.btn6 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[5]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })}

                {btn.btn7 &&
                    posts.map((d) => {
                        if (d.date_details === nextSevenDays[6]) {
                            return (
                                <div className="col-12 col-sm-8 col-md-4 mb-5 mx-auto" key={d.id}>
                                    <Card item={d} />
                                </div>
                            );
                        }
                        return null;
                    })} 
            </div>
        </div>
    );
}

export default Day_Calender;



