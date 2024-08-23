import { React, useState, useEffect } from 'react';
import axios from "axios";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './card/card';
import './Board.css';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import PropagateLoader from 'react-spinners/PropagateLoader';

function Board() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true);
        axios.get('/API/Members/All')
        .then((response) => {
            setPosts(response.data.data);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    const displayedPosts = isExpanded ? posts : posts.filter((_, index) => index < 4);

    return (
        <div className='container-fluid' id='board'>
            <div className='row headers justify-content-center'>
                <h6 className='header1 fw-semibold lh-base text-center'>Board of Directors</h6>
                <h3 className='header2 fw-bold lh-base text-center'>Board Members</h3>
                <div className="col-md-9">
                    <p className='parag fw-normal lh-base text-center'>
                        The SHIMA Board of Directors is composed of distinguished leaders with proven expertise in healthcare administration, information management, and related fields. Their collective knowledge and experience are instrumental in guiding the association’s strategic direction and ensuring the highest standards of governance.
                    </p>
                </div>
            </div>

            {loading ? (
                <PropagateLoader className='text-center py-5' color="#3CB7A8" />
            ) : (
                <div className='row bod-cards'>
                    {displayedPosts?.map((item) => (
                        <div key={item.id} className="col-md-6 mb-2">
                            <Card item={item} />
                        </div>
                    ))}
                </div>
            )}

            <div className='mb-4 text-center w-25 mx-auto'>
                {
                    isExpanded ?
                    (
                        <a href='#board'>
                            <Button
                                className='btns'
                                buttonStyle='btn--green'
                                onClick={() => setIsExpanded(!isExpanded)}>Show Less&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} size='lg' className='align-items-center'/>
                            </Button>
                        </a>
                    ):(
                        <Button
                            className='btns'
                            buttonStyle='btn--green'
                            onClick={() => setIsExpanded(!isExpanded)}>
                            Read More&nbsp;
                            <FontAwesomeIcon icon={faArrowRight} size='lg' className='align-items-center'/>
                        </Button>
                    )
                }
            </div>
        </div>
    );
}

export default Board;
