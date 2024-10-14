import React from 'react'
export const Contacts = () => {
  return (
    <div className='md:p-5 lg:p-5 px-3' id='contacts mt-5'>
        <h1 className='px-5 mb-3' data-aos="fade-up" data-aos-delay="100">Contact Us</h1>
        <p data-aos="fade-up" data-aos-delay="100" className='px-5 text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700'>Get in touch with us for tailored solutions to meet your business needs. Reach out through the form below, and we'll be happy to assist you.</p>
    
        <div className=' lg:flex lg:gap-8 md:px-5 lg:px-2 lg:ml-5 w-[100vw]  pb-2' data-aos="fade-up" data-aos-delay="100">
            <div className=' lg:w-[40%] w-[95%] md:w-[100%] p-5 md:shadow-lg lg:shadow-2xl md:border-2 border-2 shadow-md  mt-4 ' >
            
                <div> 
                    <h4>Address</h4>
                    <p className='lg:text-xl md:text-lg'>58, Unit, Police Chowki, 

                        Shree Sant Dnyaneshwar Industrial Estate 

                        Plot 59, no 08, Mohan Nagar Main Rd, 

                        Near Mohanagar, D-II Block, MIDC, 

                        Pimpri-Chinchwad, Maharashtra 41101
                    </p>
                </div>
                <div>
                    <h4>Call Us</h4>
                    <p className='lg:text-xl md:text-lg'>+91-900-329-2301   +91-895-648-6237  +91-985-041-8036</p>
                </div>
                <div>
                    <h4>Email Us</h4>
                    <p className='lg:text-xl md:text-lg'>marketing@sasnextgen.co.in</p>
                </div>
                <div className='lg:w-[100%]'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.409331685175!2d73.79664727411765!3d18.645618882472363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b834df48985b%3A0x7a02a9e9af27c5af!2sSAS%20Automation%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1727170960378!5m2!1sen!2sin"  style={{border:0,width:'100%',height:'270px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='lg:w-[50%] w-[95%] md:w-[100%] md:shadow-lg lg:shadow-2xl p-5 lg:text-xl md:text-md  md:border-2 border-2 shadow-md mt-4 lg:mt-0' >
                <form>
                   
                   <div className='md:flex lg:flex  w-[100%]'>
                    <div className=' md:w-1/2 lg:w-1/2 h-[12vh] '>
                        <label className='mb-2'>Your Name</label><br/>
                        <input type="text" name="name" required=""  className='border-2 h-[50%] w-[100%] md:w-[95%] lg:w-[95%]'/>
                    </div>
                    <div className='md:w-1/2 h-[12vh] '>
                        <label className='mb-2'>Your Email</label><br/>
                        <input type="text" name="email" required=""  className='border-2 h-[50%] w-[100%] md:w-[95%] lg:w-[95%] md:ml-4 lg:ml-4 '/>
                    </div>
                    </div>
                    <div className='w-full mt-2  h-[12vh]'>
                        <label className='mb-2'>Subject</label><br/>
                        <input type="text" name="subject" required="" className='border-2 w-[100%] h-[50%]'/>
                    </div>
                    <div className=' mt-2 h-[30vh]'>
                        <label className='mb-2'>Message</label><br/>
                        <input type="text" name="subject" required="" className='border-2 w-[100%] h-[90%] '/>
                    </div>
                    
                    <div className=' flex justify-center mt-4'>
                        <button className='bg-[#009970] rounded-2xl px-4 py-2 text-white'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
