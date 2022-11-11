import React  from 'react';


const UserReviews = ({userReview}) => {
   const{review,reviewer}=userReview;
    return (
        <div>
            <div className="card bg-white shadow-xl my-10 w-4/5">
  <div className="card-body">
   
    <p className='text-black font-semi-bold'>{review}</p>
    <div className="card-actions justify-end">
     <small className='text-black'>Reviewed by : {reviewer}</small>
    </div>
  </div>
</div>
        </div>
    );
};

export default UserReviews;