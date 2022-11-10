import React from 'react';
import Carousel from './Carousel/Carousel';
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
        </div>
    );
};

export default Home;