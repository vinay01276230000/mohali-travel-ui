import traveller from "../assets/traveller.png";
import plane from "../assets/plane.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={plane}
        alt="plane"
        className="absolute top-24 right-[32%] w-20 animate-pulse"
      />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <p className=" font-bold uppercase tracking-wide mb-4 text-[#DF6951]">
            Best destinations around the world
          </p>

          <h1 className="text-6xl md:text-7xl font-bold text-primary leading-tight">
            Travel,&nbsp;
            <span className="relative inline-block">
              enjoy
              <span className="absolute left-0 bottom-2 w-full h-2 bg-[#DF6951] -z-10"></span>
            </span>
            <br />
            and live a new <br /> and full life
          </h1>

          <p className="text-gray-500 mt-6 max-w-md">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening.
          </p>

          <div className="flex items-center gap-6 mt-8">
            <button className="bg-accent hover:bg-orange-500 text-white px-7 py-3 rounded-lg shadow-lg">
              Find out more
            </button>

            <button className="flex items-center gap-3 font-medium ">
              <span className="w-12 h-12  flex items-center justify-center rounded-full bg-[#DF6951] text-white">
                ▶
              </span>
              Play Demo
            </button>
          </div>
        </div>
        <div className="relative flex justify-center">
          <img
            src={traveller}
            alt="Traveller"
            className="w-[446px] md:w-[700px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
