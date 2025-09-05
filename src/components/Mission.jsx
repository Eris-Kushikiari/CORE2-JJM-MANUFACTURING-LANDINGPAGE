import React from "react";

function MissionVision() {
  return (
    <section className="mt-12 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div data-aos="fade-up" className="max-w-md mx-auto space-y-10 px-4">
        {/* Mission (Top) */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
            Mission
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Our mission is to deliver innovative and safe cleaning products
            that meet industry standards and contribute to a healthier
            environment.
          </p>
        </div>

        {/* Vision (Bottom) */}
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-emerald-600 dark:text-emerald-400">
            Vision
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
            Our vision is to create a future where sustainable and eco-friendly
            cleaning solutions not only deliver outstanding performance but also
            help preserve our planet for generations to come.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
