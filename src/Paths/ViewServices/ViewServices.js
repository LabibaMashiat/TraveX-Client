import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../images-11/services/france.jpg'

const ViewServices = ({service}) => {
    const{name,_id,picture,description,package_duration,price,rating}=service;
    return (
        <div className=''>
            <div className="card w-96 bg-white shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-semi-bold">{name}</h2>
    <p className='text-black'>{description.slice(0,101) +'...'}<Link to={`/service-details/${_id}`}><small>Read More</small></Link></p>
    <h2 className='text-black font-semi-bold'>Price : {price}</h2>
    <h2 className='text-black font-semi-bold'>Package-Duration: {package_duration}</h2>
    <h2 className='text-black font-semi-bold'>Rating: {rating}</h2>
    <div className="card-actions justify-end">
     <Link to={`/service-details/${_id}`}> <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
         </div>
        </div>
    );
};

export default ViewServices;