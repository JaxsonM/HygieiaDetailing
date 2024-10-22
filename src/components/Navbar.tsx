// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          Hygieia Auto Detailing
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-blue-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-300 transition duration-300"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-300 transition duration-300"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-300 transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/book"
            className="bg-white text-blue-500 font-semibold py-1 px-4 rounded-full shadow-md hover:bg-blue-100 transition duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
