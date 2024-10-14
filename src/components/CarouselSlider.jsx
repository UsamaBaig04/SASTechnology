import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import assa from '../images/tech1.jpg';

export const CarouselSlider = () => {
  return (
    <div className='mb-4' id='home'>
      <Carousel className="w-[100vw] h-[65vh] lg:h-[70vh] md:h-[70vh] bg-red-100">
        <Carousel.Item className="w-full h-full">
          <img
            src={assa}
            alt="First slide"
            className="w-full h-[65vh] md:h-[70vh] lg:h-[70vh] object-cover"
            style={{ maxHeight: '100%'}}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="w-full h-full">
          <img
            src={assa}
            alt="Second slide"
            className="w-full h-[65vh] md:h-[70vh] lg:h-[70vh] object-cover"
            style={{ maxHeight: '100%' }}
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="w-full h-full">
          <img
            src={assa}
            alt="Third slide"
            className="w-full h-[65vh] md:h-[70vh] lg:h-[70vh] object-cover"
            style={{ maxHeight: '100%' }}
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
