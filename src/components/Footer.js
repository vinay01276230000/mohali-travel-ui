import appStore from "../assets/footer/Play Store.png";
import googlePlay from "../assets/footer/Google Play.png";

import facebook from "../assets/footer/Social.png";
import instagram from "../assets/footer/Social (2).png";
import twitter from "../assets/footer/Social (1).png";

const Footer = () => {
  return (
    <footer className="bg-white pt-28 pb-10">
      <div className="max-w-6xl mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">Jadoo.</h2>
            <p className="text-gray-500 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-gray-500">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affilates</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg mb-6">More</h4>
            <ul className="space-y-4 text-gray-500">
              <li>Airlinefees</li>
              <li>Airline</li>
              <li>Low fare tips</li>
            </ul>
          </div>
          <div>
            <div className="flex gap-4 mb-6">
              <img
                src={facebook}
                alt="Facebook"
                className="w-16 h-16 cursor-pointer"
              />
              <img
                src={instagram}
                alt="Instagram"
                className="w-16 h-16 cursor-pointer"
              />
              <img
                src={twitter}
                alt="Twitter"
                className="w-16 h-16 cursor-pointer"
              />
            </div>

            <p className="text-gray-600 mb-4 font-medium">
              Discover our app
            </p>

            <div className="flex gap-4">
              <img
                src={googlePlay}
                alt="Google Play"
                className="h-10 cursor-pointer"
              />
              <img
                src={appStore}
                alt="App Store"
                className="h-10 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <p className="text-center text-gray-500 text-sm">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
