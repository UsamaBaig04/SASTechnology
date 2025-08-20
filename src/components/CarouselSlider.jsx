import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import assa from '../images/oil.jpg';
import assb from '../images/oilCarousel.png'
export const CarouselSlider = () => {
  return (
    <div className='mb-4' id='home'>
      <Carousel className="w-[100vw] h-[40vh] lg:h-[70vh] md:h-[70vh] bg-yellow-200">
        <Carousel.Item className="w-full h-[100%]">
          <img
            src={assa}
            alt="First slide"
            className="pt-11 md:pt-0 w-full h-[40vh] md:h-[70vh] lg:h-[70vh]  md:object-cover"
            style={{ maxHeight: '100%'}}
          />
            {/* <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-10"></div> */}

          <Carousel.Caption className="absolute inset-16 flex items-center justify-center">
          <div className="bg-white bg-opacity-25 px-4 py-1 md:px-10 md:py-5 xl:py-8 rounded">
            <h1 className="font-bold md:font-extrabold text-white text-base md:text-3xl lg:text-3xl xl:text-[3rem] shadow-2xl tracking-tight">OIL AND GAS</h1>
          </div>
          </Carousel.Caption>

        </Carousel.Item>

        

        

      </Carousel>
    </div>
  );
};
