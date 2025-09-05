import React from 'react';

const Department = () => {
  const features = [
    {
      icon: "✅",
      title: "Core 1",
      description:
        "Focuses on strategic planning, innovation, and driving the company's long-term vision. Responsible for high-level decision-making and ensuring all business functions align with organizational goals.",
      link: "https://core1.jjm-manufacturing.com/auth/login",
    },
    {
      icon: "💰",
      title: "Core 2",
      description:
        "Handles operational execution, process optimization, and quality assurance. Ensures that daily business activities run smoothly and efficiently across all departments.",
      link: "https://core-2-jjm-manufacturing-rgjr.vercel.app",
    },
    {
      icon: "🔧",
      title: "Admin",
      description:
        "Manages office operations, documentation, compliance, and general support. Ensures internal workflows are efficient and supports all departments in administrative tasks.",
      link: "https://admin.jjm-manufacturing.com",
    },
    {
      icon: "⚡",
      title: "Finance",
      description:
        "Oversees financial planning, budgeting, and accounting. Responsible for managing company funds, ensuring profitability, and maintaining accurate financial records.",
      link: "https://finance.jjm-manufacturing.com",
    },
    {
      icon: "🌱",
      title: "Hr 1",
      description:
        "Recruitment and staffing. Finds and hires qualified candidates to support business growth.",
      link: "https://hr1.jjm-manufacturing.com/login",
    },
    {
      icon: "🌍",
      title: "Hr 2",
      description:
        "Employee relations and performance management. Ensures a positive work environment and handles employee concerns.",
      link: "https://hr2.jjm-manufacturing.com",
    },
    {
      icon: "🏆",
      title: "Hr 3",
      description:
        "Training and development. Designs programs for employee skill enhancement and professional growth.",
      link: "https://hr3.jjm-manufacturing.com",
    },
    {
      icon: "📦",
      title: "Hr 4",
      description:
        "Compliance and policy enforcement. Ensures company policies align with labor laws and best practices.",
      link: "https://hr4.jjm-manufacturing.com",
    },
    {
      icon: "🛡️",
      title: "Logistic 1",
      description:
        "Handles supply chain management, procurement, and material handling. Ensures raw materials and goods are available for production and distribution.",
      link: "https://logistic1.jjm-manufacturing.com",
    },
    {
      icon: "🚀",
      title: "Logistic 2",
      description:
        "Focuses on inventory management, shipping, and distribution. Responsible for coordinating deliveries and maintaining warehouse efficiency.",
      link: "https://logistic2.jjm-manufacturing.com",
    },
  ];

  return (
    <section id="why-choose-us" className="text-gray-900 dark:text-gray-100 py-16 lg:py-24 bg-white dark:bg-gray-900">
      {/* Container */}
      <div
        data-aos="fade-up"
        className="container mx-auto px-6 md:px-12 lg:px-20 text-center"
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-emerald-600 dark:text-emerald-400">
          Our Department
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Our department is committed to excellence, efficiency, and innovation in delivering high-quality services. 
          We work collaboratively to ensure smooth operations, uphold standards, 
          and drive progress in our respective fields. With a dedicated team and a customer-focused approach, 
          we strive to provide solutions that meet the needs of our organization and stakeholders.
        </p>

        {/* Features Grid */}
        <div className="w-full px-4 mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md dark:shadow-lg hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center text-center no-underline"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-emerald-100 dark:bg-emerald-500/20 text-2xl text-emerald-500 dark:text-emerald-400 rounded-full shadow-inner">
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
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Department;
