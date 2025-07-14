import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navTop, setNavTop] = useState(false)
  const [navWidth, setNavWidth] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    
    // document.body.classList.add("overflow-hidden");
  };
  const handleGetQuote =()=>{
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  useEffect(()=>{
    const handlescroll = () => {
      if(window.scrollY >100){
        setNavTop(true)
        setNavWidth(true)

      }
      else{
        setNavTop(false)
        setNavWidth(false)

      }

      if(window.scrollY >400){
      }else if(window.scrollY <400){
      }
    }

    window.addEventListener('scroll', handlescroll)

    return ()=>{
      window.removeEventListener('scroll', handlescroll)
    }
  },[])

  // console.log("=======", navWidth)
  return (
    <>
      <div  className= {`navContainer flex items-center w-[100vw] ${navWidth? 'transition-all duration-500 md:w-full lg:w-full':'transition-all duration-500 md:w-[90vw] lg:w-[90vw] lg:ml-16 md:ml-16' } h-[9vh] text-sm md:text-md lg:text-lg fixed ${navTop? 'transition-all duration-500 md:top-0 lg:top-0':'transition-all duration-500 md:top-10 lg:top-10'} z-50  bg-white shadow-xl data-aos="fade-up" ` }>
        <div className='bg-[#009970] w-[35%] md:w-[20%] lg:w-[20%] h-[100%] flex items-center justify-center  text-base sm:text-xl md:text-lg lg:text-2xl  text-white px-1 xl:text-3xl 2xl:text-4xl font-bold tracking-wide  shadow-md beba leading-[.4rem]'>SAS TECHNOLOGY</div>
        <div className='flex justify-end w-[80%] h-[100%]'>
          <ul className='justify-evenly items-center w-[80%] h-[100%]  hidden md:flex font-semibold cursor-pointer md:text-sm  xl:text-base 2xl:text-lg raleway'>
            <li className='md:text-md hover:text-[#009970]'>
              <a href='#home' className='text-gray-700 no-underline hover:text-[#009970]'>HOME</a>
            </li>
            <li className='md:text-md hover:text-[#009970]'>
              <a href='#about' className='text-gray-700 no-underline hover:text-[#009970]'>ABOUT</a>
            </li>
            <li className='md:text-md hover:text-[#009970]'>
              <a href='#services' className='text-gray-700 no-underline hover:text-[#009970]'>SERVICES</a>
            </li>
            <li className='md:text-md hover:text-[#009970]'>
              <a href='#products' className='text-gray-700 no-underline hover:text-[#009970]'>PRODUCTS</a>
            </li>
            <li className='md:text-md hover:text-[#009970]'>
              <a href='#contacts' className='text-gray-700 no-underline hover:text-[#009970]'>CONTACTS</a>
            </li>
          </ul>
          <div className='flex items-center h-[100%]'>
            <button className='shadow-lg font-semibold bg-[#009970] rounded-3xl text-white px-3 mr-2 py-2  hover:bg-[#009960] hover:shadow-lg raleway'onClick={handleGetQuote}>Get Quote</button>
            <div className='md:hidden px-2' onClick={toggleSidebar}>
              <RxHamburgerMenu size={30} />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[55%] max-w-[300px] bg-[#009970] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between p-4 border-b'>
          <h2 className='text-xl font-bold'>Menu</h2>
          <AiOutlineClose size={25} className="cursor-pointer" onClick={toggleSidebar} />
        </div>
        <ul className='flex flex-col items-start p-4 space-y-4'>
  <li className='text-sm font-semibold cursor-pointer hover:text-[#009970]'>
    <a href='#home' onClick={toggleSidebar} className='no-underline text-white'>HOME</a>
  </li>
  <li className='text-sm font-semibold cursor-pointer hover:text-[#009970]'>
    <a href='#about' onClick={toggleSidebar} className='no-underline text-white'>ABOUT</a>
  </li>
  <li className='text-sm font-semibold cursor-pointer hover:text-[#009970]'>
    <a href='#services' onClick={toggleSidebar} className='no-underline text-white'>SERVICES</a>
  </li>
  <li className='text-sm font-semibold cursor-pointer hover:text-[#009970]'>
    <a href='#products' onClick={toggleSidebar} className='no-underline text-white'>PRODUCTS</a>
  </li>
  <li className='text-sm font-semibold cursor-pointer hover:text-[#009970]'>
    <a href='#contacts' onClick={toggleSidebar} className='no-underline text-white'>CONTACTS</a>
  </li>
</ul>
        {/* <button className='md:hidden bg-white rounded-3xl text-[#009960] px-3 mr-2 py-2  hover:bg-[#009960] hover:shadow-lg'onClick={handleGetQuote}>Get Quote</button> */}
      </div>

      {/* Background overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};
