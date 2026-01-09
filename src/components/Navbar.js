import logo from "../assets/Jadoo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO IMAGE */}
        <img src={logo} alt="Jadoo Logo" className="h-12 cursor-pointer" />

        {/* MENU */}
        <ul className="hidden md:flex items-center gap-10 text-gray-700 font-medium">
          <li className="hover:text-primary cursor-pointer">Destinations</li>
          <li className="hover:text-primary cursor-pointer">Hotels</li>
          <li className="hover:text-primary cursor-pointer">Flights</li>
          <li className="hover:text-primary cursor-pointer">Bookings</li>
        </ul>

        {/* RIGHT */}
        <div className="hidden md:flex items-center gap-6">
          <button className="text-gray-700 hover:text-primary">Login</button>
          <button className="border border-gray-700 px-6 py-2 rounded-md">
            Sign up
          </button>
          <select className="bg-transparent outline-none">
            <option>EN</option>
            <option>HI</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
