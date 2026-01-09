import { useState } from "react";
import sendIcon from "../assets/subscribe/Group 77.png";
import mailIcon from "../assets/subscribe/Group 46.png";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return alert("Please enter email");
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative bg-[#f9f7fe] rounded-[40px] px-8 md:px-24 py-20 text-center">
          <img
            src={sendIcon}
            alt="send"
            className="absolute -top-6 -right-5 w-16 h-16 z-30"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Subscribe to get information, latest news and other interesting
            offers about Jadoo
          </h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <div className="relative w-full md:w-[420px]">
              <img
                src={mailIcon}
                alt="mail"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5"
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-6 rounded-xl outline-none shadow-sm"
              />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-orange-500
                text-white px-10 py-6 rounded-xl font-medium shadow-lg
                hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
