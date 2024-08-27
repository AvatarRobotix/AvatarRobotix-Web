import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


import agri_0 from "../assets/video/agri_0.mp4";
import medical_0 from "../assets/video/medical_3.mp4";

import videobg from "../assets/video/edit1.mp4";

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

  return (
    <div>
      {/* Hero Section */}
      <section className="relative container mx-auto text-center h-screen flex items-center justify-center">
        <video
          src={videobg}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full -mt-20 h-full object-cover"
        ></video>
        <div className="relative z-10 mt-60 rounded-lg max-w-4xl mx-auto">
          <div className="flex flex-row flex-wrap justify-center space-x-4 md:space-x-8 lg:space-x-12">
            <h1 className="text-lg sm:text-3xl md:text-xl font-medium uppercase">
              Innovation
            </h1>
            <h1 className="text-lg sm:text-3xl md:text-xl font-medium uppercase">
              Automation
            </h1>
            <h1 className="text-lg sm:text-3xl md:text-xl font-medium uppercase">
              Information
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="m-8 md:m-20">
        <div ref={sectionRef} className="relative h-auto md:h-screen p-4">
          <div className="flex flex-col md:grid md:grid-cols-12 md:grid-rows-auto gap-10 w-full h-full">
            {/* "WHO WE ARE" Title */}
            <div className="md:col-span-12 flex items-center justify-center p-4">
              <h1 className="text-2xl md:text-6xl text-center">Who We Are</h1>
            </div>

            {/* First Text Box */}
            <div className="flex flex-col md:flex-row-reverse md:col-span-6 row-span-3 p-4 md:p-6 bg-[#c5ffc4] backdrop-blur-sm bg-opacity-80 rounded-lg shadow-xl shadow-[#c5ffc4] items-center text-center">
              <p className="text-[1.2rem] md:text-[1.5rem] font-normal">
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
            <div className="flex md:flex-row md:col-span-6 row-span-2 rounded-lg shadow-xl overflow-hidden relative">
              <div className="relative aspect-w-16 aspect-h-9 w-full">
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

            {/* Second Text Box */}
            <div className="flex flex-col md:flex-row md:col-span-6 row-span-3 p-4 md:p-6 bg-[#c2cdff] rounded-lg shadow-xl shadow-[#c2cdff] items-center text-center">
              <p className="text-[1.2rem] md:text-[1.5rem] font-normal">
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

            {/* Second Video Box */}
            <div className="flex md:flex-row md:col-span-6 row-span-2 rounded-lg shadow-xl overflow-hidden relative">
              <div className="relative aspect-w-16 aspect-h-9 w-full">
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
          </div>
        </div>
      </section>

      {/* Core Value */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-6xl text-black text-center mb-12">
            Our Company Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center min-h-[400px] flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-yellow-100">
              <FaLightbulb className="text-5xl text-yellow-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Innovation
              </h3>
              <p className="">
                We foster a culture of creativity and innovation, constantly
                exploring new ideas and technologies to stay ahead in the
                industry.
              </p>
            </div>

            {/* Value Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center min-h-[400px] flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-green-100">
              <FaHandsHelping className="text-5xl text-green-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Collaboration
              </h3>
              <p className="">
                Teamwork is at the core of our success. We work together to
                achieve common goals and build strong relationships with our
                partners and clients.
              </p>
            </div>

            {/* Value Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center min-h-[400px] flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-red-100">
              <FaRocket className="text-5xl text-red-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Excellence
              </h3>
              <p className="">
                We strive for excellence in everything we do, from the quality
                of our products to the service we provide to our customers.
              </p>
            </div>

            {/* Value Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-xl text-center min-h-[400px] flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-blue-100">
              <FaShieldAlt className="text-5xl text-blue-500 mb-4" />
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                Integrity
              </h3>
              <p className="">
                Integrity is the foundation of our company. We conduct our
                business with the highest ethical standards and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <JoinUs />
      </section>
    </div>
  );
};

export default Home;
