import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const Home = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 text-slate-800 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl font-bold">
            <span className="text-slate-700">Hi, I’m </span>
            <span className="text-blue-600">SANTHOSH PRABHU A</span>
          </h1>

          <p className="text-lg mt-5 text-slate-600 max-w-xl leading-relaxed">
            MERN Stack Developer focused on building clean, scalable,
            and user-friendly web applications.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex gap-4">
            <Link
              to="/resume"
              className="px-7 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
            >
              View Resume
            </Link>

            <Link
              to="/contact"
              className="px-7 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-72 h-96 md:w-80 md:h-[420px] bg-white rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-200 p-3">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
