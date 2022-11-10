import React from 'react';
import traveller1 from '../../../images-11/travellers/traveller1.jpg'
import traveller2 from '../../../images-11/travellers/traveller2.jpg'
import traveller3 from '../../../images-11/travellers/traveller3.jpg';
import {FaStar} from 'react-icons/fa';

const Experiences = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img src={traveller1} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-semi-bold">Sara Alex</h2>
    <p className='text-black'>Last year I visited Norway with TravelX. My experience was quite good. I was impressed at their better service.The guider was amazing indeed.</p>
    <div className="card-actions justify-end flex justify-between">
        <h1>Ratings:</h1>
    <div className='flex'>
        <small>5/5</small>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
    </div>
    </div>
  </div>
</div>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img src={traveller2} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-semi-bold">Rebexa Floura</h2>
    <p className='text-black'>Recently I have been visited Italy with TravelX. I love their service.Hope in future they will be one of vthe toppest travel agency in the world.Best Of Luck!</p>
    <div className="card-actions justify-end flex justify-between">
        <h1>Ratings:</h1>
    <div className='flex'>
        <small>4/5</small>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-silver-500'></FaStar>
    </div>
    </div>
  </div>
</div>
            <div className="card w-80 bg-white shadow-xl">
  <figure><img src={traveller3} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title text-black font-semi-bold">Jackob Aylan</h2>
    <p className='text-black'>Impressed by their service.Visited many spots with the help of TravelX around the world.They never disappointed me.Highly recommended.</p>
    <div className="card-actions justify-end flex justify-between">
        <h1>Ratings:</h1>
    <div className='flex'>
        <small>5/5</small>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
        <FaStar className='text-yellow-500'></FaStar>
    </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Experiences;
