import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../assets/css/services.css";

import service from "../assets/img/agri.jpg";
import service_0 from "../assets/img/agri_02.png";

gsap.registerPlugin(ScrollTrigger);

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

// Data for Service Items
// const serviceItems = [
//   {
//     id: "autonomous-vehicles",
//     imgSrc: "Untitled design (3).png",
//     imgAlt: "Robotic Tractors",
//     title: "Autonomous Farming Vehicles",
//     descriptions: [
//       "Develop autonomous tractors for tasks such as plowing, planting, and harvesting, reducing manual labor and increasing efficiency.",
//       "Create robotic systems that can plant seeds and harvest crops with precision."
//     ]
//   },
//   {
//     id: "precision-agriculture",
//     imgSrc: "Untitled design (6).png",
//     imgAlt: "Drones for Monitoring",
//     title: "Precision Agriculture",
//     descriptions: [
//       "Use drones for monitoring crop health and mapping fields for precision farming.",
//       "Implement AI algorithms to analyze data from drones and sensors for better crop management."
//     ]
//   },
//   {
//     id: "soil-management",
//     imgSrc: "Untitled design (7).png",
//     imgAlt: "Soil Sensors",
//     title: "Soil Management",
//     descriptions: [
//       "Deploy robotic soil sensors to collect data on soil conditions and optimize farming practices.",
//       "Use robotic systems for soil tillage and preparation."
//     ]
//   },
//   {
//     id: "irrigation-management",
//     imgSrc: "Untitled design (8).png",
//     imgAlt: "Smart Irrigation",
//     title: "Irrigation Management",
//     descriptions: [
//       "Develop automated irrigation systems to optimize water usage and reduce waste.",
//       "Implement robots that adjust irrigation schedules based on real-time data."
//     ]
//   },
//   {
//     id: "pest-control",
//     imgSrc: "Untitled design (9).png",
//     imgAlt: "Pest and Weed Control",
//     title: "Pest and Weed Control",
//     descriptions: [
//       "Design robots for autonomous weed removal and targeted pest management.",
//       "Reduce the need for herbicides and pesticides with precision robotics."
//     ]
//   },
//   {
//     id: "harvesting",
//     imgSrc: "Untitled design (10).png",
//     imgAlt: "Robotic Harvesting",
//     title: "Harvesting and Post-Harvest Handling",
//     descriptions: [
//       "Create advanced harvesters for delicate crop handling.",
//       "Implement automated sorting and packaging systems."
//     ]
//   },
//   {
//     id: "farm-data-management",
//     imgSrc: "Untitled design (12).png",
//     imgAlt: "Farm Data Management",
//     title: "Farm Data Management",
//     descriptions: [
//       "Provide AI-enhanced farm management software and real-time monitoring tools."
//     ]
//   },
//   {
//     id: "research-development",
//     imgSrc: "Untitled design (15).png",
//     imgAlt: "Research and Development",
//     title: "Research and Development",
//     descriptions: [
//       "Engage in continuous R&D to create custom robotic solutions and collaborate with agricultural experts."
//     ]
//   }
// ];

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
  useEffect(() => {
    // GSAP animation for the timeline line
    const timelineLine = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-container",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        markers: false
      }
    });

    const timelineItems = gsap.utils.toArray(".timeline-item");

    // Loop through each timeline item to animate the line and items
    timelineItems.forEach((item, index) => {
      const isReversed = index % 2 === 0;

      // Animate the connecting line segment
      timelineLine.to(".timeline-line", {
        height: `${((index + 1) / timelineItems.length) * 100}%`,
        duration: 1.5,
        ease: "power4.out"
      });

      // Animate the timeline item
      gsap.fromTo(
        item,
        { opacity: 0, scale: 0.8, x: isReversed ? -100 : 100 },
        {
          opacity: 1,
          scale: 1,
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: 1,
            markers: false
          },
          duration: 1.5,
          ease: "power4.out"
        }
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
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <>
      {/* Header Section */}
      <section className="header">
        <div className="header-container">
          <div className="header-content">
            <h1>Welcome to Avatar Robotix</h1>
            <p>
              Revolutionizing the Future with Cutting-Edge Robotics and
              Automation
            </p>
          </div>
          <div className="header-overlay"></div>
          <video autoPlay muted loop className="header-video">
            <source src="124333-730771399_large (1).mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      {/* Video Background Section */}
      <section className="video-section text-center">
        <div className="" style={{ backgroundColor: "white", color: "black" }}>
          <h2 style={{ marginTop: "7%" }}>Innovating the Future</h2>
          <p>
            Join us in revolutionizing industries with our cutting-edge
            technology solutions.
          </p>
        </div>
      </section>
      <img src={service} alt="Service" className="image-part" />

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          {/* Repeat Service Card */}
          {[
            "Medical Robotics",
            "Agriculture Robotics",
            "Industrial Automation",
            "Drone Technology",
            "Artificial Intelligence"
          ].map((serviceType) => (
            <div className="service-card" key={serviceType}>
              <img src={service} alt={serviceType} />
              <h3>{serviceType}</h3>
              <p>
                {`Advanced robotics solutions for ${serviceType.toLowerCase()}, improving precision and efficiency.`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="contact-section bg-blue-200 text-white text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-6xl text-black mb-6">Get in Touch</h2>
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
        {/* Robotics Grid Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {[
            {
              title: "Surgical Robots",
              image: service_0,
              description:
                "Highly precise robotic systems used in minimally invasive surgeries. These systems offer enhanced dexterity, stability, and precision, often leading to shorter recovery times and reduced complications."
            },
            {
              title: "Robotic-Assisted Rehabilitation",
              image: service,
              description:
                "Robots assist in physical therapy and rehabilitation, helping patients recover mobility and strength after injuries or surgeries. These systems are tailored to individual needs, ensuring effective recovery."
            },
            {
              title: "Diagnostic Robots",
              image: service_0,
              description:
                "Assist in imaging and diagnostics by performing high-precision scans or operating diagnostic equipment. These robots help analyze data and handle samples with accuracy."
            },
            {
              title: "Robotic Prosthetics and Orthotics",
              image: service,
              description:
                "Advanced robotic prosthetics and orthotics improve the functionality and comfort of artificial limbs and supportive devices. They mimic natural movement with sophisticated control systems."
            },
            {
              title: "Remote Surgery and Telemedicine",
              image: service_0,
              description:
                "Robotics enable surgeons to perform procedures remotely, often in conjunction with telemedicine technologies. This benefits underserved or remote areas by providing access to high-quality medical care."
            },
            {
              title: "Automated Laboratory Robots",
              image: service,
              description:
                "In medical research and diagnostics, robots automate repetitive tasks in laboratories. This increases efficiency and accuracy in sample processing and data collection, contributing to faster research outcomes."
            }
          ].map((item, index) => (
            <div
              className={`flex flex-col items-center p-4 rounded-lg text-black shadow-lg bg-[#ccc2ff] h-full transition-transform transform hover:scale-105 hover:bg-[#9b87ff] hover:text-white`}
              key={index}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="flex flex-col justify-between h-full text-center">
                <h2 className="text-2xl font-medium text-black mb-2 ">
                  {item.title}
                </h2>
                <p className="text-gray-700 mb-8 text-base">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* Timeline Section */}
        <section className="relative py-12">
          <h1 className="text-center text-6xl font-extralight mt-10">
            TimeLine Services OR Projects
          </h1>
          <div className="timeline-container relative mx-auto px-6 lg:px-12 max-w-6xl">
            <div className="timeline-line absolute w-1 bg-[#a68eff] h-0 left-1/2 transform -translate-x-1/2"></div>
            {timelineItems.map((item, index) => (
              <div
                className={`timeline-item flex flex-col md:flex-row items-center my-40 relative ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                key={item.title}
              >
                <motion.div
                  className="timeline-card rounded-lg shadow-lg flex-1 mx-4"
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
                    className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>

                <motion.div
                  className="timeline-card bg-[#090518] p-8 rounded-lg shadow-lg flex-1 mx-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: "easeOut",
                    delay: index * 0.5
                  }}
                >
                  <h2 className="text-4xl text-white mb-4 font-extralight">
                    {item.title}
                  </h2>
                  <p className="text-white font-2xl font-light">
                    {item.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* Unique Cards Section */}
        <section
          className="relative unique-cards-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8"
          ref={uniqueCardsRef}
        >
          {uniqueCards.map((card, index) => (
            <motion.div
              className="gsap-unique-card flex flex-col items-center p-6 rounded-lg shadow-lg h-80 bg-[#94ff93] text-center transition-transform duration-300"
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
              <h2 className="text-4xl font-normal mb-4 text-black">
                {card.title}
              </h2>
              {card.descriptions.map((desc, i) => (
                <p className="text-base mb-2 text-black" key={i}>
                  {desc}
                </p>
              ))}
            </motion.div>
          ))}
        </section>

        {/* Container Titles Section */}
        <section className="container-titles-container py-16 ">
          <div className="container mx-auto px-4">
            <motion.h2
              className="text-5xl font-extralight text-center mb-16 text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore More !
            </motion.h2>
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12"
              ref={containerTitlesRef}
            >
              {containerTitles.map((title, index) => (
                <motion.div
                  key={index}
                  className={`gsap-container-title shadow-lg rounded-lg p-8 text-center ${
                    index % 2 === 0 ? "bg-[#c5ffc4]" : "bg-[#c2cdff]"
                  }`}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                >
                  <h3 className="text-2xl font-normal text-gray-700 mb-4">
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
