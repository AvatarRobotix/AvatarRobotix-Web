import React, { useState } from "react";
import {
  FaQuestion,
  FaHeadset,
  FaTag,
  FaCog,
  FaPlus,
  FaMinus
} from "react-icons/fa";
import { motion } from "framer-motion";

import contactus from "../assets/img/Contact_Us.png";
import ContactForm from "../components/Contact/Form";

const infoCards = [
  {
    icon: <FaQuestion className="text-4xl text-blue-600" />,
    title: "Inquiries",
    description:
      "Our support team is spread across the world to give you answers or solve your needs fast.",
    bgColor: "bg-blue-50",
    textColor: "text-blue-800"
  },
  {
    icon: <FaHeadset className="text-4xl text-green-600" />,
    title: "Support",
    description:
      "Our support team is spread across the world to give you answers or solve your needs fast.",
    bgColor: "bg-green-50",
    textColor: "text-green-800"
  },
  {
    icon: <FaTag className="text-4xl text-yellow-600" />,
    title: "Sales",
    description:
      "Have a project in mind? Get in touch with our sales team to see how we can work together.",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-800"
  },
  {
    icon: <FaCog className="text-4xl text-red-600" />,
    title: "Services",
    description:
      "Need ongoing services? Our team is ready to assist you with continuous support.",
    bgColor: "bg-red-50",
    textColor: "text-red-800"
  }
];

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="p-6 md:p-12 lg:p-16 text-center flex flex-col md:flex-row items-center">
        <div className="flex-1 p-4">
          <img
            className="w-full h-auto object-cover rounded-lg"
            src={contactus}
            alt="Contact Us"
          />
        </div>
        <div className="flex-1 p-4 text-black text-center">
          <h1 className="text-3xl text-black md:text-5xl lg:text-6xl font-extralight mt-8">
            Contact Us
          </h1>
          <h2 className="text-xl text-black md:text-2xl lg:text-3xl mt-2">
            We’d Love to Hear From You
          </h2>
          <p className="text-lg text-black md:text-xl lg:text-xl mt-4 max-w-2xl mx-auto">
            If you have any questions, comments, or inquiries, please don’t
            hesitate to reach out. We are here to help and would love to hear
            from you!
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <div>
        <ContactForm />
      </div>

      {/* Contact Info */}
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {infoCards.map((info, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-lg ${info.bgColor} transform transition-all duration-300`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`flex justify-center items-center h-16 w-16 mx-auto rounded-full ${info.bgColor}`}
              >
                {info.icon}
              </div>
              <h3
                className={`text-lg md:text-xl lg:text-2xl font-semibold mt-6 ${info.textColor} text-center`}
              >
                {info.title}
              </h3>
              <p className={`mt-4 ${info.textColor} text-center`}>
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="p-6 md:p-12">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-center">
          Our Location
        </h3>
        <div
          className="relative w-full"
          style={{ height: "500px", maxHeight: "800px" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4227656281987!2d77.40130197452541!3d11.44938064642169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93d698880c345%3A0xe08dd16d1dc3a42f!2sGobi%20Arts%20%26%20Science%20College%2C%20Gobi!5e0!3m2!1sen!2sin!4v1724305418469!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0 rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FAQ */}
      <div className="p-6 md:p-12">
        <div className="text-center mb-6">
          <h4 className="text-2xl md:text-3xl lg:text-4xl  mb-2">
            What Do You Want to Know?
          </h4>
          <p className="text-lg md:text-lg lg:text-lg">
            Some of the most frequently asked questions
          </p>
        </div>
        <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
          {[
            {
              question: "How can I apply for a job at Avatar Robotix?",
              answer:
                "Visit our Careers page, browse available job listings, and follow the instructions to apply online."
            },
            {
              question: "What services does Avatar Robotix offer?",
              answer:
                "We specialize in developing robotics solutions for agriculture, healthcare, and industrial automation. Check out our Services page for more details."
            },
            {
              question: "How can I get support for a product?",
              answer:
                "For product support, you can contact us via the Support section of our website or call our customer support hotline."
            }
          ].map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className={`border-t border-gray-200 py-4 px-4 rounded-xl transition duration-300 ease-in-out ${
                  activeIndex === index ? "bg-[#c5ffc4]" : "bg-[#c2cdff]"
                }`}
              >
                <div
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <h5 className="text-lg md:text-md font-normal">
                    {faq.question}
                  </h5>
                  {activeIndex === index ? (
                    <FaMinus className="text-black" />
                  ) : (
                    <FaPlus className="text-black" />
                  )}
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-black transition-transform duration-300 ease-in-out">
                    {faq.answer}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
