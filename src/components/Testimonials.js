import { useState } from "react";
import userImg from "../assets/testimonials/testimonials.png";

const testimonials = [
  {
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    message:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Sarah Khan",
    location: "Dubai, UAE",
    message:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  const next = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <p className="uppercase text-gray-500 tracking-widest text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-12">
            What People Say <br /> About Us.
          </h2>
          <div className="flex gap-4">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => setActive(index)}
                className={`w-3 h-3 rounded-full cursor-pointer
                  ${active === index ? "bg-primary" : "bg-gray-300"}
                `}
              />
            ))}
          </div>
        </div>
        <div className="relative w-full max-w-md">
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 z-20">
            <img
              src={userImg}
              alt="user"
              className="w-14 h-14 rounded-full absolute -top-7 -left-4 border-4 border-white"
            />

            <p className="text-gray-600 leading-relaxed mb-6 mt-6">
              “{testimonials[active].message}”
            </p>

            <h4 className="font-semibold text-primary">
              {testimonials[active].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[active].location}
            </p>
          </div>
          <div className="absolute top-30 left-8 w-full bg-white rounded-3xl shadow-lg p-8 opacity-50 z-10">
            <h4 className="font-semibold text-primary">
              {testimonials[(active + 1) % testimonials.length].name}
            </h4>
            <p className="text-gray-500 text-sm">
              {testimonials[(active + 1) % testimonials.length].location}
            </p>
          </div>
          <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex flex-col gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              ↑
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
