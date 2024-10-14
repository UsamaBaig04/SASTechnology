import React, { useState } from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { MdMonitorHeart } from "react-icons/md";
import abb from '../images/inovance.jpg'
import services1 from '../images/services1.jpg';
import services3 from '../images/services3.png';
import services4 from '../images/services4.jpg';
import services5 from '../images/services5.png';
import services6 from '../images/services6.jpg';
import { MdOutlineClose } from "react-icons/md";
const servicesData = [
  {
    id: 1,
    title: 'SAS Production Monitoring System',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat a eum veniam facere provident temporibus consequatur, laboriosam perspiciatis, illo nihil.',
    subheading: 'We monitor the production in real-time, delivering data for immediate reaction. The actual operation time of machines based on signals from the industrial automatics.',
    image: services1,
    points: ['Immediate data feedback', 'Minimize downtime', 'Boost production efficiency','Feedback regarding actual rate of production and whether a goal of a shift will be achieved','Estimated order implementation time','Real-time OEE','Analysis of production indicators after each machine cycle','Real-time notifications allowing to reduce a reaction time and eliminate bad production'],
  },
  {
    id: 2,
    title: 'SAS Alarm Monitoring System with SMS and Email alerts',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat a eum veniam facere provident temporibus consequatur, laboriosam perspiciatis, illo nihil.',
    subheading: 'We monitor the production in real-time, delivering data for immediate reaction. The actual operation time of machines based on signals from the industrial automatics.',
    image: services1,
    points: ['Immediate data feedback', 'Minimize downtime', 'Boost production efficiency','Feedback regarding actual rate of production and whether a goal of a shift will be achieved','Estimated order implementation time','Real-time OEE','Analysis of production indicators after each machine cycle','Real-time notifications allowing to reduce a reaction time and eliminate bad production'],
  },
  {
    id: 3,
    title: 'SAS Mobile App Solutions',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat ',
    subheading: 'It needs a system that is always within reach, which would contain the most current data regarding failures and down times of the machines. Application for mobile devices allowing fast transfer of information and easy reporting of any works and events.',
    image: services3,
    points: ['Recursive planning of inspections based on actual operation time and cycles of a machine or a tool', 'Notifications about failures sent to mobile devices (smart phones, tablets, scanners)', 'Preventive maintenance – failures prevention plan Monitoring of reaction time, repair time','MTBF (Mean Time Between Failure) indicator calculation in order to indicate the most vulnerable machines','Estimated time of acceptance of a request and execution of a repair','View of the state of a machine on a production hall in real-time','Analysis of production indicators after each machine cycle','An algorithm selecting optimal workers to repair a failure'],
  },
  {
    id: 4,
    title: 'SAS Quality Control',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat a eum veniam facere provident temporibus consequatur, laboriosam perspiciatis, illo nihil.',
    subheading: 'SAS Quality control system of maintaining standards in manufactured products by testing a sample of the output against the specification. Establishing location of products and handling of containers',
    image: services4,
    points: ['process tests based on data from industrial automatics','Quality criteria scenarios – the necessity to control in quantity, time, quality intervals – checklists for reporting','Process stability measuring (SPC)','Trace-ability and faster complaints handling','Adjustment process handling (rework)','Automatic reporting of defects based on industrial automatics','Operation of mobile terminals'],
  },
  {
    id: 5,
    title: 'SAS Customise Report Solution',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat a eum veniam facere provident temporibus consequatur, laboriosam perspiciatis, illo nihil.',
    subheading: 'After running a report, you can customize the report to view and analyze the data according to your needs. You can filter report data, change how data is presented graphically, change date granularity, and so on.',
    image: services5,
    points: ['Operators report execution of works by using dedicated visualisations available in the browser. Production reporting: good, bad units, adjustments, changeovers, machine settings','Automatic reporting of completed units on the basis of machine cycles','Automatic reporting of failures based on data from the industrial automatics','Designation of soft states of a machine, e.g. planned down times Reporting of causes of micro down times','Reporting of changeovers','Online access to documentation (paperless)','Launching of production in accordance with a production plan updated in real-time'],
  },
  {
    id: 6,
    title: 'SAS Real-Time Solutions',
    description: 'Alias maxime voluptate molestiae. Totam incidunt minus quod nostrum amet repellat a eum veniam facere provident temporibus consequatur, laboriosam perspiciatis, illo nihil.',
    subheading: 'Production planning optimizes production and minimizes downtime by visualizing real-time data and automatically adjusting based on machine performance and historical data. It ensures accurate queuing, updates, and recalculations for efficient production management',
    image: services6,
    points: ['Planning of availability of personnel, tools and devices','Personnel matrix','Automatic reporting of failures based on data from the industrial automatics','Changeovers matrix','Comparison of implementation of production with a production plan','Alternative production scenarios'],
  },
];

export const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setSelectedService(null);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className='w-[100vw] mt-5' id='services'>
      <div className='px-5'>
        <h1 className='mb-3'>Our Services</h1>
        <p className='text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700'>SAS is a digital transformation partner specializing in IIoT solutions that connect devices to networks, enabling continuous data collection and analysis to improve industrial efficiency, speed, safety, and performance across sectors.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:w-3/4 md:mx-auto lg:mx-auto   px-2'>
        {servicesData.map(service => (
          <div 
            key={service.id} 
            className='rounded-xl shadow-lg bg-white border-2 px-4 py-4 lg:w-full w-full transition-transform transform hover:-translate-y-2 cursor-pointer' 
            onClick={() => handleCardClick(service)} data-aos="fade-up" data-aos-delay="100"
          >
            <div className='mb-4'>
              <div className='w-16 h-16 bg-[#009970] rounded-full flex justify-center items-center border-2'>
                <MdMonitorHeart size={30} />
              </div>
            </div>
            <div className='mb-2 text-lg md:text-xl lg:text-2xl font-bold text-[#009970]'>{service.title}</div>
            <p className='mt-3 text-base md:text-base lg:text-lg'>{service.subheading}</p>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
          <div className='bg-white w-[80%] md:w-[90%] lg:w-[80%] p-8 rounded-lg shadow-lg relative overflow-y-auto '>
            <button className='absolute top-3 right-3 text-gray-500' onClick={closeModal}><MdOutlineClose size={32}/></button>
            <div>
            <h2 className='text-base lg:text-2xl md:text-lg font-bold mb-3'>{selectedService.title}</h2>
            {/* <p className='text-sm lg:text-lg md:text-sm font-semibold mb-2'>{selectedService.subheading}</p> */}
            </div>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-[70vh] md:h-[50vh]'>
            <div className=' lg:my-4 '>
            <img src={selectedService.image} alt={selectedService.title} className='w-[100%] h-[30vh] lg:w-[97%] md:w-[95%] lg:h-[47vh] md:h-[100%]' />
            </div>
            <div className='bg-slate-100 border-t-2 md:border-t-0 lg:border-t-0  md:mt-0 lg:border-l-4 md:border-l-2 border-black lg:my-4 pt-3'>
            <ul className='list-disc text-gray-900'>
              {selectedService.points.map((point, index) => (
                <li key={index} className='text-sm  lg:mb-2 lg:text-base md:text-sm'>{point}</li>
              ))}
            </ul>
            </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
