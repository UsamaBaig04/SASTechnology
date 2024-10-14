import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import abb1 from "../images/abb-1.png";
import abb2 from "../images/abb-2.gif";
import abb3 from "../images/abb-3.jpg";
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

  return (
    <div className="px-5 w-[100vw] mt-5 mb-4" id='products'  >
      <div data-aos="fade-up" data-aos-delay="100">
        <h1 className="mb-3">Products</h1>
        <p className="text-base md:text-lg lg:text-xl font-semibold mb-4 text-gray-700">Explore our wide range of innovative products designed to meet your industrial needs.</p>
      </div>

      {/* Filter buttons */}
      <div className="relative flex   w-full px-8 md:px-4 py-3" data-aos="fade-up" data-aos-delay="100">
      <button className="absolute left-0 z-10 px-2 md:hidden lg:hidden" onClick={scrollLeft}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <div className="overflow-x-auto scrollbar-hide  w-full">
      <ul ref={ulRef} className="flex  lg:justify-center space-x-5 md:space-x-5 lg:space-x-10  mb-0 text-lg md:text-base lg:text-2xl font-semibold overflow-x-auto ">
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
      <div data-aos="fade-up" data-aos-delay="100" className="isotope-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 h-auto md:px-5 lg:px-5 md:pt-4 lg:pt-4 md:pb-5 lg:pb-5 mt-2" >
        {products.map((product) => (
          <div
            key={product.id}
            className={`portfolio-item ${product.filterClass}  shadow-lg lg:w-full h-auto cursor-pointer bg-slate-50`}
           
          >
            <div className="portfolio-content h-[100%] ">
              {/* <img src={product.image} alt={product.title} className="w-full h-2/3 p-2" /> */}
              <div className="w-full h-2/3 p-2 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full  transform transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="px-4 py-2 h-auto ">
                <h4 className="text-sm md:text-lg lg:text-2xl font-semibold">{product.title}</h4>
                {/* <p className="text-sm md:text-base lg:text-lg">{product.shortDescription}</p> */}
                <button className="bg-[#009970] p-2 text-sm md:text-base lg:text-xl text-white rounded-md" onClick={() => handleOpenModal(product)}>Get More Info</button>
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
