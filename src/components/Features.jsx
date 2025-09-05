import calam from "../assets/calam.jpg";
import lemon from "../assets/lemon.jpg";
import conditioner from "../assets/conditioner.jpg";
import phase from "../assets/phase.jpg";

function Features() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-16 transition-colors duration-300">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            data-aos="fade-up"
            className="text-4xl font-bold mb-6 text-emerald-600 dark:text-emerald-400"
          >
            Our Features
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-gray-600 dark:text-gray-300 text-lg"
          >
            We offer high-quality, effective cleaning products for all your
            needs.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {/* Card Template */}
          {[
            {
              img: calam,
              title: "Calamansi Dishwashing liquid",
              desc: "Deep cleaning with a long-lasting fresh scent.",
            },
            {
              img: lemon,
              title: "Lemon Dishwashing liquid",
              desc: "Powerful grease removal for spotless dishes.",
            },
            {
              img: conditioner,
              title: "Anti Fabric conditioner",
              desc: "Keeps clothes soft and fresh all day.",
            },
            {
              img: phase,
              title: "Calamansi dishwashing paste",
              desc: "Cleans all surfaces with powerful action.",
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col justify-between"
            >
              <img
                className="w-full h-64 object-cover"
                src={item.img}
                alt={item.title}
              />
              <div className="p-6 text-center flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  {item.desc}
                </p>
              </div>
              <div className="px-6 pb-6 text-center">
                <a href="https://core-2-jjm-manufacturing-rgjr.vercel.app" rel="noopener noreferrer" target="_blank">
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                    Buy Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Features;
