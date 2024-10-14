import React from 'react'
import royalEnfield from '../images/royal-enfield.jpg'
import ashokleyland from '../images/ashok-leyland.png'
import bridgestone from '../images/bridgestone.png'
import drdo from '../images/drdo-logo.png'
import thermax from '../images/thermax.png'
import abb from '../images/abb.png'
import renault from '../images/renault-nissan.png'
import jindalSteel from '../images/jindal-steel.png'
import tatamotors from '../images/tata-motors.png'
import schneider from '../images/schneider.png'
import jsw from '../images/jsw.png'
export const Clients = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
        <div className='px-5 md:mb-5 lg:mb-5 mb-4'>
            <h1 className='mb-3'>Our Clients</h1>
            <p className='text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700'>Meet our valued clients who trust us for their digital transformation and automation solutions.</p>
        </div>
        <div className='grid place-items-center lg:place-items-start gap-y-10 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100vw]  md:px-5 lg:px-20 md:mb-5 lg:mb-5 mb-4'>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={royalEnfield} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={ashokleyland} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={bridgestone} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={drdo} className='w-[50%] h-[90%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={thermax} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={abb} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={renault} className='w-[90%] h-[100%]'/>
            </div>
            <div className='w-[40vw] md:w-[25vw] lg:w-[20vw] h-[20vh] flex justify-center items-center shadow-xl border-2'>
                <img src={jindalSteel} className='w-[80%] h-[80%]'/>
            </div>
            
        </div>
    </div>
  )
}
