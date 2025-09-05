import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bgg from "../assets/bgg.jpg";
import IndustriesServed from "../components/IndustriesServed";
import Services from "../components/services";
import Features from "../components/Features";
import About from "../components/about";
import WhyChooseUs from "../components/WhyChooseUs";
import Mission from "../components/Mission";
import Department from "../components/Department";

function Home() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Animation runs only once when scrolling
    });
  }, []);

  // Get authentication status from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is authenticated on component mount and when localStorage changes
    const checkAuth = () => {
      const auth = localStorage.getItem('isAuthenticated');
      setIsAuthenticated(auth === 'true');
    };
    
    // Initial check
    checkAuth();
    
    // Listen for storage events (when localStorage changes)
    window.addEventListener('storage', checkAuth);
    
    // Custom event listener for auth changes within the same window
    window.addEventListener('authChange', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  // Dark mode toggle state
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode class on body when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <section
        id="Home"
        className="relative min-h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: `url(${bgg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 dark:bg-black dark:bg-opacity-70"></div>
        <div className="relative z-10 max-w-md text-white text-center mx-auto">
          <h1 data-aos="fade-up" className="mb-5 text-5xl font-bold text-white dark:text-gray-100">
            Hello there!
          </h1>
          <p data-aos="fade-up" className="mb-5 text-white dark:text-gray-300">
            Welcome to JJM Soap and Detergent Manufacturing, where quality meets innovation.
          </p>
          <a href="https://core-2-jjm-manufacturing-rgjr.vercel.app" target="_blank">
            <button
              data-aos="fade-up"
              className="bg-emerald-600 text-white px-4 py-2 rounded-full hover:bg-emerald-700"
            >
              Get Started
            </button>
          </a>
        </div>
      </section>

      <section id="about" className="min-h-screen w-full flex items-center justify-center text-center relative bg-white dark:bg-gray-900">
        <About />
      </section>

      <section id="Features" className="py-16 bg-gray-100 dark:bg-gray-900 text-center">
        <Features />
      </section>

      <section id="Services" className="py-16 bg-white dark:bg-gray-900 text-center">
        <Services />
      </section>

      <section id="IndustriesServed" className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <IndustriesServed />
      </section>

      <section className="bg-white dark:bg-gray-800">
        <WhyChooseUs />
      </section>

      {/* Department section only shown when authenticated */}
      {isAuthenticated && (
        <section id="Department" className="bg-gray-100 dark:bg-gray-900">
          <Department />
        </section>
      )}

      <section id="Footer">
        <footer />
      </section>
    </div>
  );
}

export default Home;
