import React from 'react'
import { AiOutlineYoutube } from "react-icons/ai";
import { FaFacebook,FaLinkedin,FaInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className='w-[100vw] bg-slate-100 px-5 pb-4 mt-5'>
        <div className='lg:flex'>
            <div className=' p-3 lg:w-[45%]'>
                <h3>SAS TECHNOLOGY</h3>
                <p className='lg:text-lg md:text-lg'>Partner in Digital Transformation </p>
                <div className='flex gap-x-5'>
                <div className='w-11 h-11  rounded-full flex justify-center items-center border-2 border-gray-500 hover:border-[#009970] hover:text-[#009970]'>
                    <AiOutlineYoutube size={24} className='text-gray-500 hover:text-[#009970]' />
                </div>
                <div className='w-11 h-11  rounded-full flex justify-center items-center border-2 border-gray-500 hover:border-[#009970] hover:text-[#009970]'>
                    <FaFacebook size={24} className='text-gray-500 hover:text-[#009970]' />
                </div>
                <div className='w-11 h-11  rounded-full flex justify-center items-center border-2 border-gray-500 hover:border-[#009970] hover:text-[#009970]'>
                    <FaInstagram size={24} className='text-gray-500 hover:text-[#009970]' />
                </div>
                <div className='w-11 h-11  rounded-full flex justify-center items-center border-2 border-gray-500 hover:border-[#009970] hover:text-[#009970]'>
                    <FaLinkedin size={24} className='text-gray-500 hover:text-[#009970]' />
                </div>
                    
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-[25%,35%,40%]  lg:w-[50%] pt-2'>
                <div className=''>
                    <h5 className='p-2 '>Useful Links</h5>
                    <ul className='[&>li]:leading-10 lg:text-lg  md:text-lg [&>li]:hover:cursor-pointer'>
                        <li className='hover:text-[#009970]'><a href='#home' className='text-gray-700 no-underline hover:text-[#009970]'>Home</a></li>
                        <li className='hover:text-[#009970]'><a href='#about' className='text-gray-700 no-underline hover:text-[#009970]'>About Us</a></li>
                        <li className='hover:text-[#009970]'><a href='#services' className='text-gray-700 no-underline hover:text-[#009970]'>Services</a></li>
                        <li className='hover:text-[#009970]'><a href='#products' className='text-gray-700 no-underline hover:text-[#009970]'>Products</a></li>
                        <li className='hover:text-[#009970]'><a href='#contacts' className='text-gray-700 no-underline hover:text-[#009970]'>Contacts</a></li>
                    </ul>
                </div>
                <div className=''>
                <h5 className='p-2 lg:ml-5 md:ml-5 ml-3'>Our Services</h5>
                <ul className='[&>li]:leading-10 lg:text-lg md:text-lg '>
                        <li className='hover:text-[#009970] hover:cursor-pointer'>Production Monitoring</li>
                        <li className='hover:text-[#009970] hover:cursor-pointer'>Alarm Monitoring</li>
                        <li className='hover:text-[#009970] hover:cursor-pointer'>Mobile App Solutions</li>
                        <li className='hover:text-[#009970] hover:cursor-pointer'>Quality Control</li>
                        <li className='hover:text-[#009970] hover:cursor-pointer'>Customise Report Solution</li>
                    </ul>
                </div>
                <div className=' md:pl-2  w-[70vw] lg:w-full'>
                <h5 className='lg:p-2'>Contact Us</h5>
               <p className='lg:text-lg md:text-lg'>
                Building No. 3808, 25 Street,

               Ath Thuqbah Dist 34625,
                AlKhobar, Saudi Arabia
                
               </p>
               <p className='leading-[.7rem] md:leading-[.1rem] lg:leading-3 md:text-lg'><span className='font-bold'>Phone:</span> +91-900-329-2301</p>
               <p className='leading-[.7rem] lg:leading-3 md:text-lg'><span className='font-bold'>Email:</span> marketing@sasnextgen.co.in</p>
                </div>
            </div>
        </div>
        <div className='flex flex-col w-[100%]  items-center bg-slate-200 justify-center items center text-center py-2 px-2'>
            <p className='md:text-lg lg:text-xl text-sm'>&copy; Copyright <span className='text-[#009970] font-semibold '>SAS Technology</span> All Rights Reserved</p>
            <p className='leading-[.1rem] md:leading-[.1rem] lg:leading-[.2rem] md:text-lg lg:text-xl text-sm'>Designed by <span className='text-[#009970] font-semibold'>SAS Technology</span></p>
        </div>
    </div>
  )
}
