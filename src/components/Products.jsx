import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import abb1 from "../images/abb-1.png";
import abb2 from "../images/abb-2.gif";
import abb3 from "../images/abb-3.jpg";
import abb4 from "../images/abb-4.jpg";
import abb5 from "../images/abb-5.webp";
import abb from "../images/abb.png";
import redlion from "../images/redlion.png";
import redlion1 from "../images/redlion1.webp";
import redlion2 from "../images/redlion2.jpg";
import redlion3 from "../images/redlion3.png";
import { MdOutlineClose } from "react-icons/md";
import klemsan from '../images/klemsan.png'
import klemsan1 from '../images/klemsan1.webp'
import klemsan2 from '../images/klemsan2.webp'
import klemsan3 from '../images/klemsan3.jpg'
import klemsan4 from '../images/klemsan4.jpg'
import inovance from '../images/inovance.jpg'
import inovance1 from '../images/inovance1.png'
import inovance2 from '../images/inovance2.png'
import inovance3 from '../images/inovance3.webp'
import inovance4 from '../images/inovance4.jpg'
import inovance5 from '../images/inovance5.jpg'
import kyland1 from '../images/kyland1.jpg'
import kyland2 from '../images/kyland2.jpg'
import kyland3 from '../images/kyland3.jpg'
import kyland4 from '../images/kyland4.png'
import hms from '../images/hms.png'
import hms1 from '../images/hms1.jpg'
import hms2 from '../images/hms2.avif'
import geshem from '../images/geshem.png'
import geshem1 from '../images/geshem1.jpg'
import geshem2 from '../images/geshem2.webp'
import geshem3 from '../images/geshem3.jpg'
import pcvue from '../images/pcvue.png'
import pcvue1 from '../images/pcvue1.jpg'
import kntech from '../images/kntech.jpg'
import kntech2 from '../images/kntech2.webp'
export const Products = () => {
  const isotope = useRef(null);
  const [filterKey, setFilterKey] = useState("*");
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});

  const ulRef = useRef(null);

  const scrollLeft = () => {
    ulRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    ulRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };
  const products = [
    {
      id: 1,
      title: "PLC/HMI",
      image: abb1,
      shortDescription:"lorem epsum",
      description: "ABB PLCs are robust, high-performance controllers designed for industrial automation, offering scalability, flexibility, and reliability for various applications. ABB HMIs provide intuitive control and ease of use in monitoring and controlling industrial processes.including communication modules, I/O modules, and mounting hardware, ensuring seamless integration and extended functionality.",
      filterClass: "filter-abb",
    },
    {
      id: 2,
      title: "AC Drives",
      image: abb2,
      shortDescription:"lorem epsum",
      description: "ABB AC Drives are advanced variable frequency drives that enhance motor performance, energy efficiency, and process control in various industrial applications. These drives optimize energy consumption and reduce operational costs by adjusting motor speed to match the required load.ABB provides a range of accessories for AC drives, including communication modules, filters, and braking resistors, to enhance functionality and integration",
      filterClass: "filter-abb",
    },
    {
      id: 3,
      title: "SCADA",
      image: abb3,
      shortDescription:"lorem epsum",
      description: "ABB's SCADA systems, such as ABB Ability™ Zenon and Compact HMI, offer comprehensive real-time monitoring and control for industrial processes. Advanced data analytics, seamless integration with other automation systems",
      filterClass: "filter-abb",
    },
    {
      id: 3,
      title: "VFD",
      image: abb4,
      shortDescription:"lorem epsum",
      description: "ABB's Variable Frequency Drives (VFDs) are advanced motor controllers that adjust the speed and torque of electric motors, enhancing energy efficiency and process control. These VFDs support various applications, from HVAC to complex industrial systems, providing smooth motor operation, reducing wear, and lowering energy costs. ABB VFDs also integrate seamlessly with SCADA systems for real-time monitoring and improved operational efficiency.",
      filterClass: "filter-abb",
    },
    {
      id: 3,
      title: "DCS",
      image: abb5,
      shortDescription:"lorem epsum",
      description: "ABB's Distributed Control Systems (DCS), such as ABB Ability™ System 800xA, Symphony Plus, and Freelance, provide centralized control and automation for complex industrial processes across sectors like power, chemicals, and oil & gas. These DCS solutions offer robust real-time control, monitoring, and data integration, allowing operators to make data-driven decisions, optimize production, and increase safety.",
      filterClass: "filter-abb",
    },
    {
      id: 4,
      title: "Panel Meters",
      image: redlion3,
      shortDescription:"lorem epsum",
      description: "Red Lion's panel meters provide precise measurement of various parameters like voltage, current, and temperature. Clear, easy-to-read displays with configurable settings for customized viewing. Built for industrial environments, Red Lion’s panel meters are robust and reliable, ensuring long-term performance.",
      filterClass: "filter-redlion",
    },
    {
      id: 5,
      title: "IoT Solutions",
      image: redlion2,
      shortDescription:"lorem epsum",
      description: "Red Lion’s IoT solutions provide edge computing capabilities for real-time data processing and analytics, seamless data acquisition, visualization, and integration with various industrial protocols, support remote monitoring and control, ensuring operational efficiency and proactive maintenance.",
      filterClass: "filter-redlion",
    },
    {
      id: 6,
      title: "Network",
      image: redlion1,
      shortDescription:"lorem epsum",
      description: "Red Lion's Ethernet switches come in a variety of types, including managed, unmanaged, monitored, and PoE (Power over Ethernet) options, among others. These switches are designed to enhance network performance and reliability in industrial settings. Additionally, Red Lion provides communication converters, including protocol and media converters, to facilitate smooth data transmission across different network types.",
      filterClass: "filter-redlion",
    },
    {
      id: 7,
      title: "Signal Converter",
      image: klemsan1,
      shortDescription:"lorem epsum",
      description: "Klemsan offers a variety of signal converters designed to facilitate seamless conversion between different signal types, ensuring compatibility and efficient communication across various systems and devices",
      filterClass: "filter-klemsan",
    },
    {
      id: 8,
      title: "Isolator",
      image: klemsan2,
      shortDescription:"lorem epsum",
      description: "Their isolators provide reliable electrical isolation and protection against voltage surges and noise, safeguarding sensitive equipment and ensuring uninterrupted operation in industrial environments.",
      filterClass: "filter-klemsan",
    },
    {
      id: 9,
      title: "Motor Protection Relay",
      image: klemsan3,
      shortDescription:"lorem epsum",
      description: "Klemsan's motor protection relays offer comprehensive protection for motors against overloads, short circuits, phase imbalances, and other electrical faults, helping to prevent downtime and prolong equipment lifespan.",
      filterClass: "filter-klemsan",
    },
    {
      id: 10,
      title: "Multifunction Meter",
      image: klemsan4,
      shortDescription:"lorem epsum",
      description: "Klemsan's multifunction meters combine multiple measurement capabilities into a single device, offering accurate monitoring of electrical parameters such as voltage, current, power, energy consumption, and power quality",
      filterClass: "filter-klemsan",
    },
    {
      id: 11,
      title: "PLC",
      image: inovance3,
      shortDescription:"lorem epsum",
      description: "Inovance PLCs (Programmable Logic Controllers) provide reliable, high-speed automation control for a range of industrial applications. Known for their flexibility, scalability, and robust performance, these PLCs support complex tasks, seamless integration, and easy programming. They’re ideal for optimizing processes in manufacturing, packaging, and other automated systems, ensuring efficient and precise control.",
      filterClass: "filter-inovance",
    },
    {
      id: 11,
      title: "HMI",
      image: inovance5,
      shortDescription:"lorem epsum",
      description: "Inovance HMIs (Human Machine Interfaces) offer intuitive, user-friendly interfaces for real-time monitoring and control of industrial processes. With high-resolution displays, customizable screens, and easy integration, they enhance operator efficiency and system oversight. Ideal for applications in automation, Inovance HMIs streamline interaction between users and machines, improving operational productivity.",
      filterClass: "filter-inovance",
    },
    {
      id: 11,
      title: "Industrial Robots",
      image: inovance1,
      shortDescription:"lorem epsum",
      description: "It is widely used in areas requiring high precision, such as assembly, sorting, pick and place, and grinding. The system offers flexible production with high precision and speed, while being compact, lightweight, and suitable for meticulous crafting. It ensures high repeatability, speed, and power, and provides menu-aided instructions for programming and secondary development. Additionally, it offers a platform with excellent extensibility.",
      filterClass: "filter-inovance",
    },
    {
      id: 12,
      title: "AC Drives",
      image: inovance2,
      shortDescription:"lorem epsum",
      description: "The Inovance Medium Voltage AC Drive is a high-performance solution designed for demanding industrial applications. It offers exceptional energy efficiency, precise control, and robust reliability, making it ideal for heavy-duty operations. With advanced features such as dynamic response and seamless integration capabilities, the Inovance Medium Voltage AC Drive ensures optimal performance and operational efficiency across various industries.",
      filterClass: "filter-inovance",
    },
    {
      id: 12,
      title: "Servo Motors",
      image: inovance4,
      shortDescription:"lorem epsum",
      description: "Inovance servo motors deliver precise, high-performance motion control ideal for automation in industries like robotics, CNC machinery, and packaging. They feature compact designs, high torque density, and robust thermal stability, ensuring reliable operation and easy integration with compatible drives for seamless, efficient performance in demanding applications.",
      filterClass: "filter-inovance",
    },
    {
      id: 12,
      title: "UnManaged Switches",
      image: kyland1,
      shortDescription:"lorem epsum",
      description: "Kyland unmanaged switches provide reliable, plug-and-play network connectivity for industrial environments. Built for durability and efficient data transmission, these switches are ideal for applications needing basic network integration without complex configurations. With rugged designs to withstand harsh conditions, Kyland unmanaged switches are suited for sectors like automation, energy, and transportation.",
      filterClass: "filter-kyland",
    },
    {
      id: 12,
      title: "Optical Fibre Converters",
      image: kyland2,
      shortDescription:"lorem epsum",
      description: "Kyland optical fiber converters enable seamless data transmission over long distances by converting Ethernet signals to fiber optics. Designed for industrial use, these converters offer high-speed, reliable connectivity and resilience in harsh environments. Ideal for automation, transportation, and energy sectors, they ensure secure, stable communication across extended networks.",
      filterClass: "filter-kyland",
    },
    {
      id: 12,
      title: "Rack Mount Ethernet Switches",
      image: kyland3,
      shortDescription:"lorem epsum",
      description: "Kyland rack mount Ethernet switches provide high-density, reliable network connectivity tailored for industrial applications. With advanced management features and robust performance, these switches support efficient data handling in critical environments. Ideal for sectors like transportation, energy, and automation, Kyland’s rack mount switches ensure stable, high-speed communication and scalability in industrial networks.",
      filterClass: "filter-kyland",
    },
    {
      id: 12,
      title: " Layer 3 backbone switches",
      image: kyland4,
      shortDescription:"lorem epsum",
      description: "Kyland Layer 3 backbone switches deliver high-performance routing and switching for complex industrial networks. They support advanced data management, security, and redundancy, making them ideal for large-scale applications in energy, transportation, and automation. These switches ensure reliable, high-speed connectivity and efficient network traffic handling across critical infrastructure.",
      filterClass: "filter-kyland",
    },
    {
      id: 13,
      title: "Protocol Gateway",
      image: hms1,
      shortDescription:"lorem epsum",
      description: "HMS's Protocol Gateway simplifies industrial communication by seamlessly bridging various protocols, enabling interoperability between disparate devices and systems. With intuitive configuration interfaces and robust data translation capabilities, these gateways ensure smooth and efficient data exchange across the network. HMS's Protocol Gateway offers a scalable and reliable solution to streamline operations and enhance connectivity in diverse industrial environments",
      filterClass: "filter-hms",
    },
    {
      id: 14,
      title: "Remote Monitoring",
      image: hms2,
      shortDescription:"lorem epsum",
      description: "HMS's Remote Monitoring devices revolutionize industrial operations by providing real-time insights into equipment performance and status from anywhere, anytime. With advanced connectivity options and intuitive interfaces",
      filterClass: "filter-hms",
    },
    {
      id: 15,
      title: "IPC",
      image: geshem1,
      shortDescription:"lorem epsum",
      description: "Offers a range of high-performance Industrial PCs designed for reliability and efficiency in challenging environments. Their Industrial PCs have robust metal enclosures, and wide temperature ranges, ensuring optimal operation in industrial settings. These PCs are equipped with powerful processors and multiple connectivity options.",
      filterClass: "filter-geshem",
    },
    {
      id: 16,
      title: "Clean Room Display",
      image: geshem2,
      shortDescription:"lorem epsum",
      description: "Geshem provides cleanroom displays designed to meet rigorous hygiene standards required in sensitive environments. These displays feature stainless steel enclosures, water and dust resistance, and seamless touchscreens for easy cleaning and sterilization. They offer excellent durability and reliability, making them ideal for use in pharmaceutical, medical, and food processing industries.",
      filterClass: "filter-geshem",
    },
    {
      id: 17,
      title: "Keyboard",
      image: geshem3,
      shortDescription:"lorem epsum",
      description: "cleanroom keyboards designed for environments requiring stringent hygiene standards. These keyboards feature IP65/IP68-rated enclosures for water and dust resistance, and are constructed with antimicrobial materials for enhanced cleanliness. They are durable and easy to disinfect, making them ideal for use in pharmaceutical, medical, and food processing industries.",
      filterClass: "filter-geshem",
    },
    {
      id: 18,
      title: "PcVue - 21 CFR Software",
      image: pcvue1,
      shortDescription:"lorem epsum",
      description: "PcVue leverages the latest technologies and offers optimized control over your processes. Thanks to its features it is possible to configure a reliable and easy-to-use SCADA system with limited development costs.With its intuitive and unique interface, PcVue offers a secure, powerful and easily manageable system.",
      filterClass: "filter-pcvue",
    },
    {
      id: 19,
      title: "Explosion Proof Telephones",
      image: kntech,
      shortDescription:"lorem epsum",
      description: "Explosion-proof telephones work as ATEX equipment based on standard ATEX and IECEx. The ATEX explosion-proof telephone is rugged and durable. KOONTECH designs and manufactures the telephone with IECEx certification and exports to 50 countries. Every explosion-proof telephone has ATEX explosion protection Ex d IIB with Exmark.",
      filterClass: "filter-kntech",
    },
    {
      id: 20,
      title: "Rack & Ponion",
      image: kntech2,
      shortDescription:"lorem epsum",
      description: "Gambini Meccanica's rack and pinion systems are engineered for precision and durability, ideal for various industrial applications. These systems feature high-quality materials and precise machining, ensuring smooth and reliable motion. With customizable options and robust construction, Gambini Meccanica's rack and pinion solutions deliver optimal performance and longevity in demanding environments",
      filterClass: "filter-kntech",
    },
  ];

  useEffect(() => {
    // Initialize Isotope once after the component mounts
    isotope.current = new Isotope(".isotope-container", {
      itemSelector: ".portfolio-item",
      layoutMode: "masonry",
      filter: "*",
      transitionDuration: 0,
    });

    return () => isotope.current.destroy(); // Cleanup on unmount
  }, []);

  useEffect(() => {
    // Re-arrange Isotope items when the filter key changes
    if (isotope.current) {
      isotope.current.arrange({ filter: filterKey });
    }
  }, [filterKey]);

  const handleFilter = (key) => {
    setFilterKey(key); // Update filter key state to trigger Isotope re-filtering
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    document.body.classList.remove("overflow-hidden");
  };

   const handleGetQuote =()=>{
    const contactsSection = document.getElementById('contacts');
    if (contactsSection) {
      contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className=" w-[100vw] mt-5 mb-4  px-5" id='products'  >
      <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="mb-3 raleway">Products</h1>
        <p className="text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700 roboto">Explore our wide range of innovative products designed to meet your industrial needs.</p>
      </div>

      {/* Filter buttons */}
      <div className="relative flex   w-full px-8 md:px-4 py-3" data-aos="fade-up" data-aos-delay="100">
      <button className="absolute left-0 z-10 px-2 md:hidden lg:hidden" onClick={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="overflow-x-auto scrollbar-hide  w-full">
      <ul ref={ulRef} className="flex  lg:justify-center space-x-5 md:space-x-5 lg:space-x-10  mb-0 text-lg md:text-base lg:text-2xl font-semibold overflow-x-auto roboto">
        <li
          className={`cursor-pointer ${filterKey === "*" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter("*")}
        >
          All
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-abb" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-abb")}
        >
          ABB
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-redlion" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-redlion")}
        >
          RedLion
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-klemsan" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-klemsan")}
        >
          Klemsan
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-inovance" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-inovance")}
        >
          Inovance
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-kyland" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-kyland")}
        >
          Kyland
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-hms" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-hms")}
        >
          HMS
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-geshem" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-geshem")}
        >
          Geshem
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-pcvue" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-pcvue")}
        >
          PcVue
        </li>
        <li
          className={`cursor-pointer ${filterKey === ".filter-kntech" ? "text-[#009970]" : ""} hover:text-[#009970]`}
          onClick={() => handleFilter(".filter-kntech")}
        >
          KNTECH
        </li>
      </ul>
      </div>
      <button className="absolute right-0 z-10 px-2 md:hidden lg:hidden" onClick={scrollRight}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      </div>
      {/* Portfolio grid */}
      <div data-aos="fade-up" data-aos-delay="100" className="isotope-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-auto md:px-5 lg:px-5 md:pt-4 lg:pt-4 md:pb-5 lg:pb-5 mt-2 " >
        {products.map((product) => (
          <div
            key={product.id}
            className={`portfolio-item ${product.filterClass}  shadow-lg lg:w-full h-auto cursor-pointer bg-slate-50`}
           
          >
            <div className="portfolio-content h-[100%] bg-white">
              {/* <img src={product.image} alt={product.title} className="w-full h-2/3 p-2" /> */}
              <div className="w-full h-[60%] p-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full  transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="px-4 py-2 h-[40%] flex flex-col justify-center">
                <h4 className="text-sm md:text-lg lg:text-xl xl:text-lg 2xl:text-2xl font-semibold raleway">{product.title}</h4>
                {/* <p className="text-sm md:text-base lg:text-lg">{product.shortDescription}</p> */}
                {/* <button className="bg-[#009970] p-2 text-sm md:text-base lg:text-xl text-white rounded-md" onClick={() => handleOpenModal(product)}>Get More Info</button> */}
                <button className="bg-[#009970] p-2 lg:p-5  text-sm md:text-base lg:text-lg 2xl:text-xl 2xl:mt-2 2xl:rounded-xl text-white rounded-md raleway" onClick={handleGetQuote}>Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" >
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90vw] lg:w-[50vw] lg:h-[90vh] md:h-[90vh] h-[90vh] absolute overflow-y-auto custom-scrollbar">
            <div className="mb-2 flex justify-end">
            <button
              className=" font-bold"
              onClick={handleCloseModal}
            >
              <MdOutlineClose size={36}/>
            </button>
            </div>
            
           <div className=" w-[100%]  lg:h-[60%] md:h-[50%] h-[45%] flex justify-center">
           <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-auto object-contain"
            />
           </div>
            <div className="px-2 md:px-5 lg:px-5 py-2 mt-4 lg:text-lg md:text-base text-sm">
            <p className="text-2xl font-bold ">{selectedProduct.title}</p>
            <p className="text-base md:text-base lg:text-lg">{selectedProduct.description}</p>
            </div>
             
          </div>
        </div>
      )}
    </div>
  );
};
