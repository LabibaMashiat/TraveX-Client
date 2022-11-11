import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewDetails from '../MyReviewDetails/MyReviewDetails';

const MyReviews = () => {
    const{user}=useContext(AuthContext);
    const[myReviews,setMyReviews]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setMyReviews(data)
        })
    },[user?.email])
    return (
        <div>
           <h1 className='text-center text-black font-semi-bold'>You have {myReviews.length} reviews</h1>
           {
            myReviews.map(myReview=><MyReviewDetails key={myReview._id} myReview={myReview}></MyReviewDetails>)
           }
        </div>
    );
};

export default MyReviews;