import React, { useState } from "react";
import { FaLinkedinIn, FaFacebookF, FaLock } from "react-icons/fa";
import LoginModal from "./LoginModal";

function Footer() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const openLoginModal = () => {
    setShowLoginModal(true);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-10 transition-colors duration-200">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Brand & Mission (Left Column) */}
        <div>
          <h3 className="text-2xl font-bold text-emerald-600 dark:text-emerald-500 mb-3">#ChooseChoiceChosen</h3>
          <p className="text-gray-400 dark:text-gray-300 text-sm leading-relaxed">
            Empowering Futures, One Choice at a Time! 🚀
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 rounded-full transition-colors"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

        {/* Australian Brands (Second Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-500 mb-3">Why JJM</h3>
          <ul className="text-gray-400 dark:text-gray-300 space-y-2 text-sm">
            <li>Dedicated Support</li>
            <li>High-Quality Standards</li>
            <li>Cost-Effective Services</li>
            <li>Strong Client Relationships</li>
            <li>Trust and Reliability</li>
            <li>Continuous Improvement</li>
          </ul>
        </div>

        {/* Menu (Third Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-500 mb-3">MENU</h3>
          <ul className="text-gray-400 dark:text-gray-300 space-y-2 text-sm">
            <li>About us</li>
            <li>Features</li>
            <li>Services</li>
            <li>Market</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Us (Fourth Column) */}
        <div>
          <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-500 mb-3">Contact Us</h3>
          <p className="text-gray-400 dark:text-gray-300 text-sm">
            Email: erishallypena@gmail.com
          </p>
          <p className="text-gray-400 dark:text-gray-300 text-sm">Phone: +63-908-343-4444</p>
          <p className="text-gray-400 dark:text-gray-300 text-sm mt-2">
            Location:  
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 dark:text-blue-300 hover:underline"
            >
              R26W+RMV, San Jose St, San Jose del Monte City, Bulacan
            </a>
          </p>
          
          {/* Staff Access Button */}
          <button
            onClick={openLoginModal}
            className="mt-4 flex items-center bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white px-4 py-2 rounded-md transition-colors"
          >
            <FaLock className="mr-2" /> Admin Access
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-xs">
        © {new Date().getFullYear()} JJM Soap and Detergent Manufacturing. All rights reserved.
      </div>

      {/* Login Modal */}
      {showLoginModal && <LoginModal onClose={closeLoginModal} />}
    </footer>
  );
}

export default Footer;