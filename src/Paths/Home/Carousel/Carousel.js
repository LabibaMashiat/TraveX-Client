import React from 'react';
import slide1 from '../../../images-11/sliders/slide1.jpg'
import slide2 from '../../../images-11/sliders/slide2.jpg'
import slide3 from '../../../images-11/sliders/slide3.jpg'
import './Carousel.css';

const Carousel = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img alt="" src={slide1}className="w-full" />
        </div>
          <div className="absolute  transform -translate-y-1/2  top-1/2">
            <h1 className='text-white font-semi-bold text-4xl text-center '>Let's travel the world!</h1>
            <p  className=' text-white font-bold text-7xl px-3'>Explore the world with <br /> TraveX</p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5 bg-red-500">❮</a> 
            <a href="#slide2" className="btn btn-circle bg-red-500">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img alt="" src={slide2}className="w-full" />
        </div>
        <div className="absolute  transform -translate-y-1/2  top-1/2">
            <h1 className='text-white font-semi-bold text-4xl text-center '>The nature awaits!</h1>
            <p  className=' text-white font-bold text-7xl relative left-1/4'>Lets discover its <br /> beauty!</p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5 bg-red-500">❮</a> 
            <a href="#slide3" className="btn btn-circle bg-red-500">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <div className='carousel-img'>
        <img alt="" src={slide3}className="w-full" />
        </div>
         <div className="absolute  transform -translate-y-1/2  top-1/2 right-1/2">
         <h1 className='text-white font-semi-bold text-4xl text-center '>What arew you waiting for!</h1>
            <p  className=' text-white font-bold text-7xl text-center'>Explore the unseen</p>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5 bg-red-500">❮</a> 
            <a href="#slide1" className="btn btn-circle bg-red-500">❯</a>
          </div>
        </div> 
      </div>
    );
};

export default Carousel;