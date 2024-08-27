import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    { to: "/career/internship", label: "Career Intership" },
    // {
    //   label: "Projects",
    //   dropdown: [
    //     { to: "/projects", label: "Agri Team" },
    //     { to: "/projects", label: "Medical Team" }
    //   ]
    // },
    // {
    //   label: "Career",
    //   dropdown: [
    //     { to: "/career/job", label: "Job" },
    //     { to: "/career/internship", label: "Internship" }
    //   ]
    // },
    { to: "/ourteam", label: "Our Team" },
    { to: "/contact", label: "Contact" }
  ];

  return (
    <header className="bg-white shadow-md text-gray-900 fixed top-0 left-0 right-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 md:px-10 lg:px-20">
        {/* Left Section - Logo */}
        <div className="flex-1 text-left">
          <Link
            to="/"
            className="text-2xl font-bold transition-colors duration-300 hover:text-blue-600"
          >
            Avatar Robotix
          </Link>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="hidden md:flex flex-1 justify-center space-x-4 lg:space-x-8">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative" ref={dropdownRef}>
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className="flex items-center space-x-1 px-4 py-2 text-lg rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: dropdownOpen === item.label ? 1 : 0,
                    y: dropdownOpen === item.label ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48 border border-gray-200 z-50"
                  onClick={(e) => e.stopPropagation()} // Prevent dropdown closing on click
                >
                  {item.dropdown.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setDropdownOpen(null)} // Close dropdown on link click
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="text-lg px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 whitespace-nowrap"
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-900 hover:text-blue-600 focus:outline-none"
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
        className={`fixed top-0 right-0 w-3/4 bg-white shadow-lg border border-gray-200 transition-transform duration-300 ease-in-out z-50 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleMobileMenuToggle}
            className="text-gray-900 hover:text-blue-600 focus:outline-none"
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
        <div className="flex flex-col p-4 space-y-2">
          {menuItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => handleDropdownToggle(item.label)}
                  className="w-full text-left px-4 py-2 text-lg rounded-md transition-colors duration-300 hover:bg-gray-200"
                >
                  <span>{item.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      dropdownOpen === item.label ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{
                    opacity: dropdownOpen === item.label ? 1 : 0,
                    y: dropdownOpen === item.label ? 0 : -10
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col mt-2 space-y-2 bg-white shadow-lg rounded-lg border border-gray-200"
                >
                  {item.dropdown.map(({ to, label }) => (
                    <li key={to}>
                      <Link
                        to={to}
                        className="block px-4 py-2 text-lg hover:bg-gray-100 transition-colors"
                        onClick={() => {
                          setMobileMenuOpen(false); // Close menu on link click
                          setDropdownOpen(null); // Close dropdown on link click
                        }}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                className="block text-lg px-4 py-2 rounded-md transition-colors duration-300 hover:bg-gray-200"
                onClick={() => setMobileMenuOpen(false)} // Close menu on link click
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
