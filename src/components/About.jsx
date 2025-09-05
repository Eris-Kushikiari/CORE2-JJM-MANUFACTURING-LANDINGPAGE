import React from "react";
import aboutImage from "../assets/about.jpg"; 
import MissionVision from "./Mission";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 flex flex-col justify-center items-center py-10 px-4">
      <div className="container mx-auto max-w-6xl px-6 text-center">
        {/* Heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-400 mb-6"
          data-aos="fade-up"
        >
          About Us
        </h2>

        {/* Description */}
        <p
          className="text-gray-600 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          At <span className="font-semibold dark:text-white">JJM Soap and Detergent Manufacturing</span>, we are
          committed to providing high-quality, effective, and eco-friendly cleaning solutions
          for households and businesses. With years of expertise in the industry, we take pride
          in producing premium-grade laundry detergents, dishwashing liquids, fabric softeners,
          and multi-purpose cleaners that ensure superior cleanliness and long-lasting freshness.
        </p>

        {/* Image Section */}
        <div className="w-full flex justify-center" data-aos="zoom-in" data-aos-delay="500">
          <img
            className="rounded-lg shadow-lg w-full max-w-[600px] h-auto object-cover"
            src={aboutImage}
            alt="About Us"
          />
        </div>

        {/* Mission & Vision Component */}
        <div className="mt-10 w-full">
          <MissionVision />
        </div>
      </div>
    </div>
  );
}

export default About;
