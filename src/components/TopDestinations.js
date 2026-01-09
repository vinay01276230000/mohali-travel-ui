import rome from "../assets/destinations/destination1.png";
import london from "../assets/destinations/destination2.jpg";
import europe from "../assets/destinations/destination3.png";
import navigation from "../assets/icons/navigation 1.png";

const destinations = [
  {
    place: "Rome, Italy",
    price: "$5,42k",
    days: "10 Days Trip",
    image: rome,
  },
  {
    place: "London, UK",
    price: "$4.2k",
    days: "12 Days Trip",
    image: london,
  },
  {
    place: "Full Europe",
    price: "$15k",
    days: "28 Days Trip",
    image: europe,
  },
];

const TopDestinations = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-500 uppercase tracking-widest text-sm mb-2">
          Top Selling
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">
          Top Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg
              hover:shadow-2xl transition-all duration-300"
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.place}
                  className="w-full h-full object-cover
                  hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-medium text-gray-800">
                    {item.place}
                  </h3>
                  <span className="text-gray-700 font-semibold">
                    {item.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img
                    src={navigation}
                    alt="navigation"
                    className="w-4 h-4"
                  />
                  <span>{item.days}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopDestinations;
