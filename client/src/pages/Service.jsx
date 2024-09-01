import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import "../assets/css/services.css";

import service from "../assets/img/agri.jpg";
import service_0 from "../assets/img/agri_01.jpg";

gsap.registerPlugin(ScrollTrigger);

// Data for Services
const services = [
  {
    type: "Medical Robotics",
    imageSrc: service,
    description:
      "Advanced robotics solutions for medical applications, improving precision and efficiency.",
    details:
      "Medical robotics is revolutionizing healthcare with technologies that enhance surgical precision, reduce recovery times, and improve patient outcomes. Our solutions include robotic surgery systems, automated diagnostics, and patient care robotics, designed to meet the growing demands of modern healthcare."
  },
  {
    type: "Agriculture Robotics",
    imageSrc: service,
    description:
      "Innovative robotics for agriculture, enhancing productivity and sustainability.",
    details:
      "Agriculture robotics is transforming farming with automated systems that increase crop yields, reduce labor costs, and promote sustainable practices. From autonomous tractors to precision planting and harvesting robots, our technology helps farmers produce more with less."
  },
  {
    type: "Industrial Automation",
    imageSrc: service,
    description:
      "Robotic solutions for industrial automation, increasing efficiency and safety.",
    details:
      "Industrial automation with robotics enhances manufacturing processes by automating repetitive tasks, improving precision, and ensuring safety. Our solutions include robotic arms, conveyor systems, and smart manufacturing technologies that help industries operate more efficiently."
  },
  {
    type: "Drone Technology",
    imageSrc: service,
    description:
      "Cutting-edge drone technology for various applications, from surveying to delivery.",
    details:
      "Drone technology is advancing rapidly, providing new opportunities for industries such as agriculture, logistics, and security. Our drones offer superior aerial capabilities for tasks like surveying, monitoring, and even delivery, making operations faster and more efficient."
  },
  {
    type: "Artificial Intelligence",
    imageSrc: service,
    description:
      "AI-driven solutions that power the future of technology and automation.",
    details:
      "Artificial intelligence is at the forefront of technological innovation, driving advancements in automation, data analysis, and machine learning. Our AI solutions enable smarter decision-making, predictive analytics, and intelligent systems that adapt to the ever-changing technological landscape."
  }
];

// Data for Timeline Items
const timelineItems = [
  {
    title: "Automated Dispensing Systems",
    description:
      "These systems manage the storage, retrieval, and dispensing of medications. They are crucial for ensuring accuracy and efficiency in medication distribution.",
    imageAlt: "Automated Dispensing Systems",
    imageSrc: service
  },
  {
    title: "Robotic Medication Management",
    description:
      "This involves the use of robots to handle and manage medication inventories, reducing human error and increasing efficiency.",
    imageAlt: "Robotic Medication Management",
    imageSrc: service
  },
  {
    title: "Automated Medication Compounding",
    description:
      "For pharmacies that prepare custom medications or mixtures, automation can standardize and streamline the compounding process, improving consistency and safety.",
    imageAlt: "Automated Medication Compounding",
    imageSrc: service
  },
  {
    title: "Pharmacy Data Management",
    description:
      "Robotics and automation can help manage large volumes of data related to prescriptions and medication usage, ensuring accuracy and facilitating data analysis.",
    imageAlt: "Pharmacy Data Management",
    imageSrc: service
  }
];

// Data for Container Titles
const containerTitles = [
  "Development and Cultivation of Enhanced Seaweeds",
  "Biogas Production Systems",
  "Waste Management and Resource Recovery",
  "Biogas Collection and Utilization",
  "Data Analytics and Optimization",
  "Integration with Sewage Treatment",
  "Environmental and Regulatory Compliance",
  "Training and Support",
  "Research and Development"
];

// Data for Unique Cards
const uniqueCards = [
  {
    title: "Cultivation of Seaweeds",
    descriptions: [
      "Develop systems for cultivating nutrient-rich seaweeds using advanced techniques to maximize yield and nutrient content.",
      "Implement robotic systems for harvesting seaweeds with minimal manual intervention."
    ]
  },
  {
    title: "Feeding Black Soldier Flies",
    descriptions: [
      "Design robotic systems to efficiently feed BSFs with nutrient-rich seaweeds.",
      "Utilize sensors and AI to monitor the BSFs’ feeding behavior."
    ]
  },
  {
    title: "BSF Cultivation and Management",
    descriptions: [
      "Develop systems for the automated breeding and rearing of BSFs.",
      "Implement robotics and AI to manage the lifecycle of BSFs."
    ]
  },
  {
    title: "Bio-Fertilizer Production",
    descriptions: [
      "Create automated systems to process BSF larvae into bio-fertilizer.",
      "Utilize AI and robotics to ensure the quality and consistency of the bio-fertilizer."
    ]
  },
  {
    title: "Waste Management",
    descriptions: [
      "Develop systems to manage and process residual materials from seaweed and BSF production.",
      "Implement systems for recycling nutrients back into the production cycle."
    ]
  },
  {
    title: "Data Analytics",
    descriptions: [
      "Use AI algorithms to analyze data from feeding, growth, and processing stages.",
      "Implement predictive analytics to forecast production outcomes and optimize resource allocation."
    ]
  },
  {
    title: "Integration with Existing Systems",
    descriptions: [
      "Ensure that the BSF bio-fertilizer production system integrates smoothly with existing agricultural and waste management systems.",
      "Develop IoT-enabled systems to provide real-time monitoring and control."
    ]
  },
  {
    title: "Compliance",
    descriptions: [
      "Focus on reducing the environmental impact of the production process.",
      "Ensure that all processes meet relevant environmental and agricultural regulations."
    ]
  },
  {
    title: "Research and Development",
    descriptions: [
      "Engage in research and development to explore new seaweed varieties and improve bio-fertilizer quality.",
      "Partner with researchers, organizations, and technology developers."
    ]
  }
];

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden"; // Disable background scroll
  };

  const closePopup = () => {
    setSelectedService(null);
    document.body.style.overflow = "auto"; // Re-enable background scroll
  };

  // Clean up if the component unmounts while the popup is open
  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    // GSAP timeline for animating the line and cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false
      }
    });

    const timelineItems = gsap.utils.toArray(".timeline-item");

    // Animate the timeline line
    tl.fromTo(
      ".timeline-line",
      { height: "0%" },
      { height: "100%", duration: 1.5, ease: "power4.out" }
    );

    // Sequentially animate each timeline item
    timelineItems.forEach((item, index) => {
      tl.fromTo(
        item,
        { opacity: 0, scale: 0.8, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: 1,
            markers: false
          }
        },
        index * 1.8 // Delay each card by 1.8 seconds from the previous one
      );
    });
  }, []);

  const uniqueCardsRef = useRef(null);
  const containerTitlesRef = useRef(null);

  useEffect(() => {
    const elements =
      uniqueCardsRef.current.querySelectorAll(".gsap-unique-card");

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, rotateX: -10 },
        {
          opacity: 1,
          rotateX: 0,
          duration: 1,
          delay: index * 0.3,
          ease: "power4.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "bottom 65%",
            toggleActions: "play none none reverse",
            scrub: 1
          }
        }
      );
    });
  }, []);

  useEffect(() => {
    const elements = containerTitlesRef.current.querySelectorAll(
      ".gsap-container-title"
    );

    elements.forEach((element, index) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: element,
            start: "top 90%", // Start animation when the top of the element is 90% from the top of the viewport
            end: "bottom 80%", // End animation when the bottom of the element is 80% from the top of the viewport
            toggleActions: "play none none reverse",
            markers: false // Set to true if you want to see the start and end markers for debugging
          }
        }
      );
    });
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="relative overflow-hidden w-full h-screen bg-black">
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            className="absolute inset-0 object-cover w-full h-full"
          >
            <source src="124333-730771399_large (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 md:px-8 lg:px-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
            Welcome to Avatar Robotix
          </h1>
          <p className="text-base md:text-lg lg:text-xl font-light text-white">
            Revolutionizing the Future with Cutting-Edge Robotics and Automation
          </p>
        </div>
      </section>

      {/* Video Background Section */}
      <section className="flex items-center justify-center h-auto text-center bg-white text-black py-12">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Innovating the Future
          </h2>
          <p className="text-lg md:text-xl">
            Join us in revolutionizing industries with our cutting-edge
            technology solutions.
          </p>
        </div>
      </section>

      <img
        src={service}
        alt="Service"
        className="w-[80%] h-[50%] mx-auto object-cover"
      />

      <div>
        {/* Services Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl md:text-6xl font-light text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.type}
                  className="bg-white p-2 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
                >
                  <img
                    src={service.imageSrc}
                    alt={service.type}
                    className="w-full h-60 object-cover mb-4 rounded-xl"
                  />
                  <div className="px-4 py-2">
                    <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                      {service.type}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                    <div className="flex justify-center">
                      <button
                        onClick={() => handleLearnMore(service)}
                        className="mt-4 bg-[#c8c8c8] text-black py-2 px-8 rounded-md hover:bg-[#ffcfa5] transition-colors duration-300"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popup Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg max-w-lg mx-auto relative">
              <button
                onClick={closePopup}
                className="absolute top-3 right-3 text-black hover:bg-red-500 hover:text-white p-2 rounded-full transition-colors duration-300"
              >
                X
              </button>
              <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                {selectedService.type}
              </h3>
              <p className="text-gray-600 mb-4">{selectedService.details}</p>
            </div>
          </div>
        )}
      </div>

      {/* Call to Action Section */}
      <section className="contact-section text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl text-black mb-6">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in learning more about how Avatar Robotix can help your
            business? Contact us today!
          </p>
          <a
            href="#"
            className="text-black inline-block bg-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-green-400 hover:text-white transition-colors duration-300"
          >
            <i className="fas fa-envelope mr-2"></i> Contact Us
          </a>
        </div>
      </section>

      <section>
        {/* Robots Cards */}
        <section className="px-4 py-8 sm:px-6 sm:py-12 ">
          <div className="text-center mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-black">
              Our Robotics Solutions
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-base ">
              Discover our range of cutting-edge robotic systems designed to
              revolutionize the medical field with precision, efficiency, and
              innovation.
            </p>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Surgical Robots",
                image: service_0,
                description:
                  "Highly precise robotic systems used in minimally invasive surgeries. These systems offer enhanced dexterity, stability, and precision, often leading to shorter recovery times and reduced complications.",
                bgColor: "bg-[#090518]" // First color
              },
              {
                title: "Robotic-Assisted Rehabilitation",
                image: service,
                description:
                  "Robots assist in physical therapy and rehabilitation, helping patients recover mobility and strength after injuries or surgeries. These systems are tailored to individual needs, ensuring effective recovery.",
                bgColor: "bg-[#090518]" // Second color
              },
              {
                title: "Diagnostic Robots",
                image: service_0,
                description:
                  "Assist in imaging and diagnostics by performing high-precision scans or operating diagnostic equipment. These robots help analyze data and handle samples with accuracy.",
                bgColor: "bg-[#090518]" // First color
              },
              {
                title: "Robotic Prosthetics and Orthotics",
                image: service,
                description:
                  "Advanced robotic prosthetics and orthotics improve the functionality and comfort of artificial limbs and supportive devices. They mimic natural movement with sophisticated control systems.",
                bgColor: "bg-[#090518]" // Second color
              },
              {
                title: "Remote Surgery and Telemedicine",
                image: service_0,
                description:
                  "Robotics enable surgeons to perform procedures remotely, often in conjunction with telemedicine technologies. This benefits underserved or remote areas by providing access to high-quality medical care.",
                bgColor: "bg-[#090518]" // First color
              },
              {
                title: "Automated Laboratory Robots",
                image: service,
                description:
                  "In medical research and diagnostics, robots automate repetitive tasks in laboratories. This increases efficiency and accuracy in sample processing and data collection, contributing to faster research outcomes.",
                bgColor: "bg-[#090518]" // Second color
              },
              {
                title: "AI-Powered Surgical Assistance",
                image: service,
                description:
                  "AI-driven robots assist surgeons by providing real-time analytics and decision-making support during complex procedures. This integration enhances surgical outcomes and reduces the risk of errors.",
                bgColor: "bg-[#090518]" // First color
              },
              {
                title: "Robotic Pharmacy Automation",
                image: service_0,
                description:
                  "Robots in pharmacies automate the dispensing of medications, ensuring accuracy and efficiency in medication management. This system reduces human error and speeds up the process of filling prescriptions.",
                bgColor: "bg-[#090518]" // Second color
              }
            ].map((item, index) => (
              <div
                className={`flex flex-col items-center p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl ${item.bgColor}`}
                key={index}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 md:h-40 lg:h-40 object-cover rounded-lg mb-4"
                />
                <div className="flex flex-col h-full text-center p-4">
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-white mb-2">
                    {item.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-base lg:text-base mt-4 text-gray-400 mb-4">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </section>
        </section>

        {/* Timeline Section */}
        <section className="relative py-6 lg:py-12">
          <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight mt-4 mb-6 sm:mt-6 lg:mt-8 xl:mt-10">
            TimeLine Services OR Projects
          </h1>
          <div className="timeline-container relative mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-6xl overflow-x-auto">
            <div className="timeline-line absolute w-1 bg-[#090518] h-full left-1/2 transform -translate-x-1/2"></div>
            <div className="flex flex-col space-y-12 lg:space-y-24">
              {timelineItems.map((item, index) => (
                <div
                  className={`timeline-item flex flex-col sm:flex-row items-center ${
                    index % 2 === 0 ? "sm:flex-row-reverse" : ""
                  }`}
                  key={item.title}
                >
                  <motion.div
                    className="timeline-card rounded-lg shadow-lg flex-1 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.3
                    }}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                    />
                  </motion.div>

                  <motion.div
                    className="timeline-card bg-[#090518] p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-lg shadow-lg flex-1 mx-2 sm:mx-4 md:mx-6 lg:mx-8"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                      delay: index * 0.5
                    }}
                  >
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 font-extralight">
                      {item.title}
                    </h2>
                    <p className="text-sm sm:text-base md:text-base lg:text-base xl:text-base text-white font-light">
                      {item.description}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Unique Cards Section */}
        <section
          className="relative unique-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4 sm:p-6 md:p-8 lg:p-10"
          ref={uniqueCardsRef}
        >
          {uniqueCards.map((card, index) => (
            <motion.div
              className="gsap-unique-card flex flex-col items-center p-4 sm:p-6 md:p-8 rounded-lg shadow-lg bg-[#94ff93] text-center transition-transform duration-300"
              key={index}
              initial={{ opacity: 0, rotateX: 15 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.68, -0.55, 0.27, 1.55]
              }}
              whileHover={{
                rotate: 5,
                backgroundColor: "#aeaeff",
                transition: {
                  duration: 0.2, // Fast hover transition
                  ease: "easeInOut"
                }
              }}
              whileTap={{ rotate: -5 }}
            >
              <h2 className="text-2xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold mb-4 text-black">
                {card.title}
              </h2>
              {card.descriptions.map((desc, i) => (
                <p
                  className="text-base sm:text-sm md:text-base lg:text-sm mb-2 text-black"
                  key={i}
                >
                  {desc}
                </p>
              ))}
            </motion.div>
          ))}
        </section>

        {/* Container Titles Section */}
        <section className="container-titles-container py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-extralight text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore More!
            </motion.h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16"
              ref={containerTitlesRef}
            >
              {containerTitles.map((title, index) => (
                <motion.div
                  key={index}
                  className={`gsap-container-title shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-4 text-center ${
                    index % 2 === 0 ? "bg-[#c5ffc4]" : "bg-[#c2cdff]"
                  }`}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <h3 className="text-lg sm:text-xl md:text-xl lg:text-xl font-normal text-black mb-4">
                    {title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Service;
