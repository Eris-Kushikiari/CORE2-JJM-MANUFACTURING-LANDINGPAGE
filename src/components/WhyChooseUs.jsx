import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "✅",
      title: "High-Quality Standards",
      description:
        "We adhere to strict quality control processes and industry-leading certifications, ensuring every product meets the highest standards.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description:
        "Our optimized production processes and bulk material sourcing allow us to provide cost-effective solutions without compromising quality.",
    },
    {
      icon: "🔧",
      title: "Advanced Technology",
      description:
        "We leverage state-of-the-art machinery, automation, and cutting-edge manufacturing techniques to ensure precision and reliability.",
    },
    {
      icon: "⚡",
      title: "Fast Turnaround",
      description:
        "With streamlined workflows and efficient production planning, we deliver high-quality products on time to keep your business running smoothly.",
    },
    {
      icon: "🌱",
      title: "Sustainability Efforts",
      description:
        "We prioritize eco-friendly manufacturing practices, waste reduction, and energy-efficient production to support a greener future.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 lg:py-24 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300"
    >
      {/* Container */}
      <div
        data-aos="fade-up"
        className="container mx-auto px-6 md:px-12 lg:px-20 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-emerald-600 dark:text-emerald-400">
          Why Choose Us?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          We provide premium quality solutions by combining innovation,
          efficiency, and advanced technology to exceed your expectations.
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Small Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 dark:bg-emerald-600 text-2xl text-emerald-500 dark:text-emerald-100 rounded-full shadow-inner">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Two Features Aligned */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto mt-8">
          {features.slice(3, 5).map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center"
            >
              {/* Small Icon */}
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 dark:bg-emerald-600 text-2xl text-emerald-500 dark:text-emerald-100 rounded-full shadow-inner">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
