import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import iBOY from "../assets/img/iboy.png";
import Agri from "../assets/img/agri_01.jpg";

import agri_0 from "../assets/video/agri_0.mp4";
import medical_0 from "../assets/video/medical_3.mp4";
import videobg from "../assets/video/edit1.mp4";

import Mobile from "../assets/video/Mobile.mp4";

import {
  FaLightbulb,
  FaHandsHelping,
  FaRocket,
  FaShieldAlt
} from "react-icons/fa";

import JoinUs from "../components/Home/Join_Us";

import "../assets/css/home.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    if (window.innerWidth <= 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // Set up event listener on component mount and clean up on unmount
  useEffect(() => {
    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize); // Check on resize

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative container mx-auto text-center h-screen flex items-end justify-center overflow-hidden">
        {/* Conditionally render videos based on screen size */}
        {isMobile ? (
          <video
            src={Mobile}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        ) : (
          <video
            src={videobg}
            autoPlay
            muted
            loop
            className="absolute inset-0 w-full h-full object-cover"
          ></video>
        )}
        <div className="relative z-10 mb-20 md:mb-32 pb-8 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-center space-y-4 md:space-y-0 md:space-x-8">
            <h1 className="text-lg sm:text-2xl md:text-xl font-medium uppercase">
              Innovation
            </h1>
            <h1 className="text-lg sm:text-2xl md:text-xl font-medium uppercase">
              Automation
            </h1>
            <h1 className="text-lg sm:text-2xl md:text-xl font-medium uppercase">
              Information
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="m-4 md:m-12 lg:m-20">
        <div ref={sectionRef} className="relative p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-5">
            {/* "WHO WE ARE" Title */}
            <div className="col-span-1 md:col-span-2 text-center">
              <h1 className="text-4xl md:text-4xl lg:text-6xl font-thin">
                Who We Are
              </h1>
            </div>

            {/* First Text Box */}
            <div className="flex flex-col md:flex-row-reverse bg-[#c5ffc4] backdrop-blur-sm bg-opacity-80 rounded-lg shadow-xl p-4 md:p-6 items-center text-center">
              <p className="text-base md:text-xl text-black">
                Welcome to Avatar Robotix, where we are pioneering the
                integration of robotics into agriculture and healthcare. Our
                mission is to develop innovative solutions that enhance
                efficiency, productivity, and sustainability in these vital
                sectors. By leveraging cutting-edge technology and intelligent
                automation, we aim to revolutionize medical procedures, improve
                patient outcomes, and advance agricultural practices. Our vision
                is a future where humans and robots work collaboratively to
                achieve better health and environmental stewardship, ensuring a
                harmonious and prosperous world for all.
              </p>
            </div>

            {/* First Video Box */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src={agri_0} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Second Video Box */}
            <div className="rounded-lg overflow-hidden">
              <div className="relative aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                >
                  <source src={medical_0} type="video/mp4" />
                </video>
              </div>
            </div>

            {/* Second Text Box */}
            <div className="flex flex-col md:flex-row bg-[#c2cdff] rounded-lg shadow-xl p-4 md:p-6 items-center text-center">
              <p className="text-base md:text-xl text-black">
                Our dedicated team of experts and innovators is committed to
                pushing the boundaries of what is possible in robotics,
                agriculture, and healthcare. We believe that the future of these
                industries lies in the seamless integration of advanced
                technologies and human expertise. By continuously exploring new
                frontiers, we aim to create solutions that meet today’s needs
                and anticipate tomorrow’s challenges. Our passion drives us to
                enhance crop yields, improve patient care, and design
                intelligent systems that benefit society as a whole.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-black text-center mb-12">
            Our Company Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Card 1 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
              <FaLightbulb className="text-4xl md:text-5xl text-yellow-500 mb-4" />
              <h3 className="text-xl md:text-xl font-semibold mb-4">
                Innovation
              </h3>
              <p>
                We foster a culture of creativity and innovation, constantly
                exploring new ideas and technologies to stay ahead in the
                industry.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-100">
              <FaHandsHelping className="text-4xl md:text-5xl text-green-500 mb-4" />
              <h3 className="text-xl md:text-xl font-semibold mb-4">
                Collaboration
              </h3>
              <p>
                Teamwork is at the core of our success. We work together to
                achieve common goals and build strong relationships with our
                partners and clients.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-red-100">
              <FaRocket className="text-4xl md:text-5xl text-red-500 mb-4" />
              <h3 className="text-xl md:text-xl font-semibold mb-4">
                Excellence
              </h3>
              <p>
                We strive for excellence in everything we do, from the quality
                of our products to the service we provide to our customers.
              </p>
            </div>

            {/* Value Card 4 */}
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl text-center flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
              <FaShieldAlt className="text-4xl md:text-5xl text-blue-500 mb-4" />
              <h3 className="text-xl md:text-xl font-semibold mb-4">
                Integrity
              </h3>
              <p>
                Integrity is the foundation of our company. We conduct our
                business with the highest ethical standards and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Works and Achievements */}
      <section className="h-auto md:h-screen ">
        <h1 className="text-center text-3xl md:text-5xl lg:text-6xl font-light mt-10 md:mt-16 lg:mt-20">
          Our Works and Achievements
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-5 grid-rows-auto md:grid-rows-5 gap-4 p-4 md:p-8 lg:p-12 h-full">
          {/* Main Video Section */}
          <div className="md:col-span-3 md:row-span-3 bg-[#c5ffc4] rounded-lg shadow-lg relative">
            <video
              src={agri_0}
              title="Company Video"
              className="w-full h-full object-cover rounded-lg"
              muted
              loop
              autoPlay
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 rounded-lg">
              <h2 className="text-white text-xl md:text-2xl lg:text-3xl font-light">
                Our Works and Achievements
              </h2>
            </div>
          </div>

          {/* Client Count */}
          <div className="md:col-span-2 md:col-start-1 md:row-start-4 bg-[#c2cdff] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-2">Excellence</h3>
            <p className="text-lg text-black">Committed to quality.</p>
          </div>

          {/* Content Block 1 */}
          <div className="md:col-span-2 md:col-start-2 md:row-start-5 bg-[#c5ffc4] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-2">Innovation</h3>
            <p className="text-lg text-black">Leading the tech revolution.</p>
          </div>

          {/* Content Block 2 */}
          <div className="md:col-start-3 md:row-start-4 bg-[#c2cdff] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-2">Automation</h3>
            <p className="text-lg text-black">Streamlining your business.</p>
          </div>

          {/* Content Block 3 */}
          <div className="md:col-start-1 md:row-start-5 bg-[#c5ffc4] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-2">Information</h3>
            <p className="text-lg text-black">Data-driven decisions.</p>
          </div>

          {/* Content Block 4 */}
          <div className="md:col-span-2 md:row-span-2 md:col-start-4 md:row-start-1 bg-[#c2cdff] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <img
              src={iBOY}
              alt="Happy Clients"
              className="w-24 h-24 mb-4 rounded-full"
            />
            <h3 className="text-2xl font-bold text-black mb-2">100+</h3>
            <p className="text-lg text-black">Happy Clients!</p>
          </div>

          {/* Large Content Block */}
          <div className="md:row-span-3 md:col-start-4 md:row-start-3 bg-[#c5ffc4] p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold text-black mb-2">
              Extensive Details
            </h3>
            <p className="text-lg text-center text-black">
              This section covers extensive details about our projects and
              achievements.
            </p>
          </div>

          {/* Image Block */}
          <div className="md:row-span-3 md:col-start-5 md:row-start-3 bg-[#c2cdff] rounded-lg shadow-lg flex items-center justify-center">
            <img
              src={Agri}
              alt="Additional Content"
              className="w-full h-60 md:h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section>
        <JoinUs />
      </section>
    </div>
  );
};

export default Home;
