import { useState } from "react";

import axon from "../assets/brands/axon.png";
import jetstar from "../assets/brands/jetstar.png";
import expedia from "../assets/brands/expedia.png";
import qantas from "../assets/brands/qantas.png";
import alitalia from "../assets/brands/alitalia.png";

const brands = [
  { img: axon, alt: "Axon Airlines" },
  { img: jetstar, alt: "Jetstar" },
  { img: expedia, alt: "Expedia" },
  { img: qantas, alt: "Qantas" },
  { img: alitalia, alt: "Alitalia" },
];

const Partners = () => {
  // Default active = Expedia (index 2)
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="flex flex-wrap justify-center items-center gap-16">
          {brands.map((brand, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300
                  flex items-center justify-center
                  ${isActive ? "bg-white shadow-xl rounded-xl px-10 py-6 scale-110" : ""}
                `}
              >
                {/* SAME SIZE BOX */}
                <div className="w-36 h-16 flex items-center justify-center">
                  <img
                    src={brand.img}
                    alt={brand.alt}
                    className={`max-w-full max-h-full object-contain
                      transition-all duration-300
                      ${isActive ? "grayscale-0 opacity-100" : "grayscale opacity-50"}
                    `}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Partners;
