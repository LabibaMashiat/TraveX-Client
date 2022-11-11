import React from 'react';

const MyReviewDetails = ({myReview}) => {
    const{review}=myReview;
    return (
        
            <div className="card bg-white shadow-xl my-10 w-4/5">
  <div className="card-body">
   
    <p className='text-black font-semi-bold'>{review}</p>
  </div>
</div>
    );
};

export default MyReviewDetails;