import {React, useState, useEffect} from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import { listData } from '../../lib/membership';
import './Membership.css';
import Card from './card/card';
import PropagateLoader from 'react-spinners/PropagateLoader';


function Membership() {

    

    const client = axios.create({
        baseURL: "/API/Memberships/All"
      });
    
    const [posts, setPosts] = useState();
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


    const data = listData;

    return (
        <>
        <div className='membership-container pt-5 pb-5'>
            <div className='container'>
                <div className="row justify-content-center">
                    <div className='col-12 col-md-9'>
                        <h5 className='membership-h1 px-2 pt-3 pt-md-5'>Membership Plans</h5>
                        <p className='membership-p  '>
                            To become an active member of the Saudi Health Information Management Association (SHIMA), applicants must comply with the association's regulations and conditions. Successful applicants will be granted the appropriate membership type along with the associated benefits.
                        </p>
                    </div>
                </div>
                <div>
                    {loading
                        ? <PropagateLoader className='text-center py-5' color="#3CB7A8" />
                        : <div className="row mx-auto">
                            {posts.map((item) => (
                                <div key={item.id} className="col-12 col-sm-6 col-md-4 mb-5">
                                    <Card item={item} className="w-100 h-100" />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </div>


        </>
    )
    }

export default Membership
