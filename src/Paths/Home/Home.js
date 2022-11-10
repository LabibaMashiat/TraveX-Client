import React from 'react';
import Carousel from './Carousel/Carousel';
import Experiences from './Experiences/Experiences';
import Guiders from './Guiders/Guiders';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className='my-5'>
                <h1 className='text-2xl text-center font-semi-bold text-black'>Travel Experts</h1>
                <h2 className='text-4xl text-center font-semi-bold text-black mb-4'>Lets meet our expert Guides</h2>
                <Guiders></Guiders>
            </div>
            <div className='my-8'>
               <h1 className='text-5xl text-center font-semi-bold text-black mb-8'>Travel Experience</h1>
               <Experiences></Experiences>
            </div>
        </div>
    );
};

export default Home;