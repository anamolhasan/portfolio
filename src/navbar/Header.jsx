import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-indigo-600 cursor-pointer">
          Anan
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 font-semibold text-gray-700">
          <a href="#home" className="hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#about-me" className="hover:text-indigo-600 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors duration-300">Skill</a>
          <a href="#projects" className="hover:text-indigo-600 transition-colors duration-300">Project</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors duration-300">Contact</a>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="#"
            className="font-semibold bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
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
