import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
  <header className="fixed top-0 left-0 w-full  backdrop-blur-md z-50">
  {/* <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/20 via-sky-100/20 to-sky-200/70 backdrop-blur-md z-50"> */}
  <div className="container mx-auto flex items-center justify-between px-6 py-5">
    <h1 className="text-4xl font-bold beginner">
      An<span className="text-red-500">a</span>mol
    </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-bold text-xl text-gray-700 border shadow-lg border-gray-300 py-3 px-10 rounded-full">
          <a href="#home" className="hover:text-blue-700  hover:underline transition-colors duration-300">Home</a>
          <a href="#about-me" className="hover:text-blue-700 hover:underline transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-blue-700 hover:underline transition-colors duration-300">Skill</a>
          <a href="#projects" className="hover:text-blue-700 hover:underline transition-colors duration-300">Project</a>
          <a href="#contact" className="hover:text-blue-700 hover:underline transition-colors duration-300">Contact</a>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="font-bold text-xl bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-800 transition-colors duration-300"
          >
            Resume
          </a>
          
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl text-indigo-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="md:hidden bg-gray-100 px-6 pb-4 space-y-4 font-semibold text-gray-700">
          <a href="#home" onClick={toggleMenu} className="block hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#about-me" onClick={toggleMenu} className="block hover:text-indigo-600 transition-colors duration-300">About</a>
          <a href="#skills" onClick={toggleMenu} className="block hover:text-indigo-600 transition-colors duration-300">Skill</a>
          <a href="#projects" onClick={toggleMenu} className="block hover:text-indigo-600 transition-colors duration-300">Project</a>
          <a href="#contact" onClick={toggleMenu} className="block hover:text-indigo-600 transition-colors duration-300">Contact</a>
          <a
            href="#"
            onClick={toggleMenu}
            className="block font-semibold bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Resume
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
