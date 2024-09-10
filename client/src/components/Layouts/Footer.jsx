import React from "react";
import { FaEnvelope, FaGlobe, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#080729] text-white py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8">
      <div className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="footer__addr space-y-4">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
            Avatar Robotix
          </h1>
          <h2 className="text-sm md:text-md lg:text-lg font-medium">Contact</h2>
          <address className="text-gray-400 text-xs md:text-sm lg:text-base">
            5534 Somewhere In, The World 22193-10212
            <br />
            <a
              className="inline-block mt-2 text-[#7e7e7e] bg-gray-900 bg-opacity-20 hover:bg-opacity-30 transition rounded-full py-1 px-3 text-xs md:text-sm lg:text-md"
              href="mailto:avatarrobotix@outlook.com"
            >
              Email Us
            </a>
            <p className="text-white mt-4">
              +91 6379211833 | +91 9025967273
              <br />
              <br />
              <a
                href="mailto:avatarrobotix@outlook.com"
                className="flex items-center justify-center gap-2"
              >
                <FaEnvelope /> avatarrobotix@outlook.com
              </a>
              <a
                href="https://www.avatarrobotix.com"
                className="flex items-center justify-center gap-2"
              >
                <FaGlobe /> www.avatarrobotix.com
              </a>
              <br />
              3/438, Iswarya Garden, P.Vellalapalayam, Gobichettipalayam -
              638476.
            </p>
          </address>
        </div>

        <div className="footer__nav">
          <h2 className="text-sm md:text-md lg:text-lg font-medium">Media</h2>
          <ul className="mt-2 space-y-1 text-gray-400 text-xs md:text-sm lg:text-base">
            <li>
              <a href="#" className="hover:text-white transition">
                Online
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Print
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Alternative Ads
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav">
          <h2 className="text-sm md:text-md lg:text-lg font-medium">
            Technology
          </h2>
          <ul className="mt-2 space-y-1 text-gray-400 text-xs md:text-sm lg:text-base">
            <li>
              <a href="#" className="hover:text-white transition">
                Hardware Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Software Design
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Digital Signage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Automation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Artificial Intelligence
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                IoT
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__nav">
          <h2 className="text-sm md:text-md lg:text-lg font-medium">Legal</h2>
          <ul className="mt-2 space-y-1 text-gray-400 text-xs md:text-sm lg:text-base">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-6 text-white">
        <a
          href="https://www.linkedin.com/in/avatar-robotix-az963"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-lg md:text-xl hover:text-blue-500 transition-colors" />
        </a>
      </div>

      <div className="mt-6 text-center text-gray-500 text-xs md:text-sm lg:text-base">
        <p>
          &copy; {new Date().getFullYear()} Avatar Robotix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
