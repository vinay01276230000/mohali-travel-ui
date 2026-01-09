import destination from "../assets/trip/Group 7.png";
import greece from "../assets/trip/girl.jpg";
import payment from "../assets/trip/Group 12.png";
import taxi from "../assets/trip/Group 11.png";
import rome from "../assets/trip/Mask Group.png";

import mapImg from "../assets/trip/map 1.png";
import ellipse from "../assets/trip/send 2.png";
import leaf from "../assets/trip/LEAF.png";
import groupIcon from "../assets/trip/Group.png";

const BookTrip = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-gray-500 font-medium mb-2">Easy and Fast</p>

          <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight mb-12">
            Book Your Next Trip <br /> In 3 Easy Steps
          </h2>
          <div className="space-y-10">
            <div className="flex gap-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl">
                <img src={destination} alt="" className="w-10" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Choose Destination
                </h4>
                <p className="text-gray-500 text-sm max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl">
                <img src={payment} alt="" className="w-10" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Make Payment
                </h4>
                <p className="text-gray-500 text-sm max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl">
                <img src={taxi} alt="" className="w-10" />
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-1">
                  Reach Airport on Selected Date
                </h4>
                <p className="text-gray-500 text-sm max-w-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex justify-center">
          <div className="bg-white rounded-3xl shadow-2xl p-7 w-[360px] relative z-10">
            <img src={greece} alt="Trip" className="rounded-2xl mb-5" />

            <h3 className="font-semibold text-primary text-lg mb-1">
              Trip To Greece
            </h3>
            <p className="text-gray-500 text-sm mb-4">
              14–29 June | by Robbin joe
            </p>
            <div className="flex gap-4 mb-5">
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <img src={leaf} alt="" className="w-10 h-10" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <img src={mapImg} alt="" className="w-5 h-5" />
              </div>
              <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
                <img src={ellipse} alt="" className="w-5 h-5" />
              </div>
            </div>

            <div className="flex items-center justify-between text-gray-500 text-sm">
              <span className="flex items-center gap-2">
                <img src={groupIcon} alt="group" className="w-5 h-5" />
                24 people going
              </span>
              <span className="text-xl text-indigo-500">♡</span>
            </div>
          </div>
          <div
            className="absolute top-52 right-25 translate-x-1/2
            bg-white rounded-2xl shadow-xl p-4 w-60 z-20"
          >
            <div className="flex gap-3 items-center mb-3">
              <img
                src={rome}
                alt="rome"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-xs text-gray-500">Ongoing</p>
                <h4 className="font-semibold text-sm text-primary">
                  Trip to Rome
                </h4>
              </div>
            </div>

            <p className="text-xs text-gray-500 mb-2">
              <span className="text-indigo-500 font-semibold">40%</span>{" "}
              completed
            </p>
            <div className="w-full h-1 bg-gray-200 rounded-full">
              <div className="w-[40%] h-1 bg-indigo-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookTrip;
