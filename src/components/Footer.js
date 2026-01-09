const Footer = () => {
  return (
    <footer className="bg-white pt-28 pb-10">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP GRID (SAME ROW LIKE IMAGE) */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-20 items-start">

          {/* LOGO + DESC */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Jadoo.
            </h2>
            <p className="text-gray-500 max-w-xs">
              Book your trip in minute, get full Control for much longer.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-6">
              Company
            </h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-primary cursor-pointer">About</li>
              <li className="hover:text-primary cursor-pointer">Careers</li>
              <li className="hover:text-primary cursor-pointer">Mobile</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-6">
              Contact
            </h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-primary cursor-pointer">Help/FAQ</li>
              <li className="hover:text-primary cursor-pointer">Press</li>
              <li className="hover:text-primary cursor-pointer">Affilates</li>
            </ul>
          </div>

          {/* MORE */}
          <div>
            <h4 className="font-semibold text-lg text-gray-900 mb-6">
              More
            </h4>
            <ul className="space-y-4 text-gray-500">
              <li className="hover:text-primary cursor-pointer">Airlinefees</li>
              <li className="hover:text-primary cursor-pointer">Airline</li>
              <li className="hover:text-primary cursor-pointer">Low fare tips</li>
            </ul>
          </div>

          {/* SOCIAL + APP (RIGHT COLUMN LIKE IMAGE) */}
          <div>
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer">
                f
              </div>

              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400
                text-white shadow flex items-center justify-center cursor-pointer">
                ⌁
              </div>

              <div className="w-10 h-10 rounded-full shadow flex items-center justify-center cursor-pointer">
                t
              </div>
            </div>

            {/* APP DOWNLOAD */}
            <p className="text-gray-600 mb-4 font-medium">
              Discover our app
            </p>

            <div className="flex gap-4">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                Google Play
              </button>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">
                App Store
              </button>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <p className="text-center text-gray-500 text-sm">
          All rights reserved@jadoo.co
        </p>
      </div>
    </footer>
  );
};

export default Footer;
