import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Reviews = () => {
    const {user}=useContext(AuthContext);
    const{_id,name}=useLoaderData();
    const handleReview=(event)=>{
        event.preventDefault();
        const form=event.target;
        const review=form.review.value;
        const email=user?.email;
        
        const reviews={
          service: _id,
          ServiceName: name,
          review,
          reviewer:email

        }

        fetch('http://localhost:5000/reviews',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(reviews)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            window.confirm('Thanks for you review');
            form.reset();
        })
        .catch(er=>console.error(er));

        

    }
    return (
        <div>
            <form onSubmit={handleReview}>
            <input name='review' type="text" placeholder="Type your review" className="input input-bordered input-info w-3/5 my-10 mx-10 bg-slate-50 text-black font-semi-bold" />
            <button type='submit' className="btn-success p-2 rounded">Submit</button>
            </form>
        </div>
    );
};

export default Reviews;