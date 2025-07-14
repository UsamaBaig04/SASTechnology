import React from 'react'
import assa from '../images/award1.jpg'
import assb from '../images/award2.jpg'
import assc from '../images/award3.jpg'
import assd from '../images/sasCollage.jpg'
export const AboutUs = () => {
  return (
    <div className=' grid w-full 2xl:grid-cols-2  md:place-items-center px-5 overflow-hidden' id='about' data-aos="fade-up" data-aos-delay="100">
        {/* <div className='lg:w-[40vw] lg:h-[80vh] md:w-[80vw] md:h-[60vh] lg:order-last md:order-first bg-yellow-300'>
            <img src={assa} className='w-[100%] h-[100%]'/>
        </div> */}
        <div className='  md:w-[80vw] xl:w-[90vw] 2xl:w-[40vw] 2xl:h-[80%] md:order-first lg:order-first xl:order-first 2xl:order-last flex justify-start items-start flex-col'>
          <img src={assd} className='  w-[100%] h-[100%] object-scale-down'/>
          <div className='w-[100%] h-[50%] flex flex-col'>
            {/* <div className='w-[100%] h-[50%] flex bg-orange-200'>
            <img src={assb} className=' object-scale-down w-[50%] h-[100%]'/>
            <img src={assc} className=' object-scale-down w-[50%] h-[100%]'/>
            </div> */}
          {/* <div className='w-[100%] h-[100%]'>
            <img src={assd} className='  w-[100%] h-[100%]'/>
          </div> */}
          
          </div>
          
        </div>

        <div className='lg:order-first md:order-first md:mt-5 mt-3'>
            <h1 className='raleway'>About Us</h1>
            <p className='md:text-base lg:text-lg  tracking-normal 2xl:text-lg roboto'>SAS Automation Pvt Ltd has been serving various industries for over a 
                decade, establishing itself as a trusted partner in delivering innovative 
                and efficient solutions. Our in-depth understanding of the diverse needs 
                of our clients, combined with extensive experience, enables us to provide 
                comprehensive services tailored to meet specific industry requirements. 
                We take pride in offering a wide range of services designed to support 
                our esteemed clients in achieving their business goals. Our business 
                offerings include:</p>
            
                <ul className='grid md:grid-cols-2 gap-x-10 lg:grid-cols-2 pt-2 md:text-sm lg:text-lg roboto   '> 
              <li>
                <div className=' [&>p]:text-base lg:[&>p]:text-lg '>
                  <h5> Design & Engineering Services.</h5>
                  <p className=''>Our Design & Engineering Services provide cutting-edge solutions to bring your projects to life. From concept to execution, we ensure innovation, precision, and quality at every step.</p>
                </div>
              </li>
              <li>
                
                <div className='[&>h5]:text-lg md:[&>h5]:text-lg lg:[&>h5]:text-xl'>
                  <h5>Customized Product Development.</h5>
                  <p>Our Customized Product Development services offer tailored solutions to meet your unique business needs. We work closely with you to design and develop products that align perfectly with your goals and specifications.</p>
                </div>
              </li>
              <li>
                
                <div className='[&>h5]:text-lg md:[&>h5]:text-lg lg:[&>h5]:text-xl'>
                  <h5>Panel Engineering & Manufacturing.</h5>
                  <p>Our Panel Engineering & Manufacturing services provide expert solutions for designing and building high-quality control panels. We ensure precision, durability, and efficiency to meet your industry's specific requirements.</p>
                </div>
              </li>
              <li>
             
                <div className='[&>h5]:text-lg md:[&>h5]:text-lg lg:[&>h5]:text-xl'>
                  <h5> Turnkey Project Support.</h5>
                  <p>Our Turnkey Project Support offers end-to-end solutions, managing every phase from design to implementation. We ensure seamless execution, timely delivery, and optimal performance for your projects.</p>
                </div>
              </li>
              <li>
               
                <div className='[&>h5]:text-lg md:[&>h5]:text-lg lg:[&>h5]:text-xl'>
                  <h5> IoT-based Solutions.</h5>
                  <p>Our IoT-based Solutions enable smart connectivity and real-time data analysis, helping industries enhance efficiency, safety, and decision-making through seamless device integration and automation.</p>
                </div>
              </li>
              <li>
                
                <div className='[&>h5]:text-lg md:[&>h5]:text-lg lg:[&>h5]:text-xl'>
                  <h5>PLC/SCADA System Design</h5>
                  <p>Our PLC/SCADA System Design services offer advanced automation solutions for monitoring and controlling industrial processes. We ensure seamless integration, reliability, and efficiency to optimize your operations.</p>
                </div>
              </li>
            </ul>
        </div>
    </div>
  )
}
