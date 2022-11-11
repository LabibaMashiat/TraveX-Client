import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa';

const ServiceDetails = () => {
    const {name,_id,picture,description,package_duration,price,rating}=useLoaderData();
    return (
        <div className='my-8 mx-8 md:flex justify-between'>
            <div className="card w-96 bg-white shadow-xl">
  <figure><img src={picture} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-semi-bold">{name}</h2>
    <p className='text-black'>{description}</p>
    <h2 className='text-black font-bold'>Price :  <u> {price}</u></h2>
    <h2 className='text-black font-bold'>Package-Duration: <u>{package_duration}</u></h2>
    <h2 className='text-black font-bold'>Rating:<u> {rating}</u></h2>
    <div className="card-actions justify-end">
    </div>
  </div>
         </div>
         <div>
         <Link className='flex justify-between' to='/services'>
                <button className='btn btn-secondary px-6 w-56'>View Other Services<FaArrowRight/></button>
          </Link>
         <Link className='flex justify-between' to={`/reviews/${_id}`}>
                <button className='btn btn-success px-6 w-56 mt-4'>View Reviews<FaArrowRight/></button>
          </Link>
         </div>
        </div>
    );
};

export default ServiceDetails;