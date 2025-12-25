import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex justify-between items-center h-16">
        <div className="w-12 h-12 rounded-full bg-yellow-400 flex items-center justify-center text-xl font-bold text-gray-900">SP</div>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          <li>
            <a href="#home" className="hover:text-yellow-500 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-yellow-500 transition">About</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-yellow-500 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-yellow-500 transition">Projects</a>
          </li>
          <li>
            <a href="#resume" className="hover:text-yellow-500 transition">Resume</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-yellow-500 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
