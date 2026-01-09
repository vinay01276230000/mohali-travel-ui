import { useState } from "react";

import weather from "../assets/services/Group 48.png";
import flights from "../assets/services/Group 51.png";
import events from "../assets/services/Group 50.png";
import custom from "../assets/services/Group 49.png";

const services = [
  {
    title: "Calculated Weather",
    desc: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: weather,
  },
  {
    title: "Best Flights",
    desc: "Engrossed listening. Park gate sell they west hard for the.",
    icon: flights,
  },
  {
    title: "Local Events",
    desc: "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: events,
  },
  {
    title: "Customization",
    desc: "We deliver outsourced aviation services for military customers.",
    icon: custom,
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-20 right-24 grid grid-cols-5 gap-4 opacity-40">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
          Category
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
          We Offer Best Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {services.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative flex justify-center"
                onClick={() => setActiveIndex(index)}
              >
                {isActive && (
                  <div
                    className="absolute -bottom-8 -left-8 w-20 h-20 bg-[#DF6951]
                    rounded-tl-3xl rounded-br-3xl z-0"
                  />
                )}
                <div
                  className={`relative z-10 p-8 rounded-3xl bg-white cursor-pointer
                    transition-all duration-300
                    ${isActive ? "shadow-2xl scale-105" : "hover:shadow-xl"}
                  `}
                >
                  <div className="flex justify-center mb-6">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className={`h-16 w-auto object-contain transition-transform
                        ${isActive ? "scale-110" : ""}
                      `}
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
