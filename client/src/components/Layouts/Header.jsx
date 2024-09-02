import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import LOGO from "../../assets/video/LOGO.mp4"; // Update this path if necessary

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const handleDropdownToggle = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/service", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/career/internship", label: "Career Internship" },
    { to: "/ourteam", label: "Our Team" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-3 px-6 lg:px-12">
        {/* Left Section - Logo */}
        <div className="flex-1 flex items-center">
          <Link
            to="/"
            className="flex items-center space-x-3 transition-colors duration-300"
          >
            <video
              src={LOGO}
              alt="Avatar Robotix Logo"
              className="h-10 w-auto object-cover" // Adjust dimensions and styling as needed
              autoPlay
              loop
              muted
            />
            <span className="text-lg uppercase font-semibold text-black">
              Avatar Robotix
            </span>
          </Link>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-base text-black px-3 py-2 rounded-lg transition-all duration-300 hover:bg-gray-50 hover:text-blue-500 whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-50 overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-700 hover:text-blue-500 focus:outline-none"
            aria-label="Close Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center p-8 space-y-6">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block w-full text-center text-lg font-light text-black px-6 py-3 rounded-md transition-colors duration-300 hover:bg-gray-200"
              onClick={() => setMobileMenuOpen(false)} // Close menu on link click
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
