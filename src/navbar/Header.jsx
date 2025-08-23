import React, { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import logo from '../assets/logo-remove.png'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentSection = "home";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full  backdrop-blur-md z-50">
      {/* <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-white/20 via-sky-100/20 to-sky-200/70 backdrop-blur-md z-50"> */}
      <div className="container mx-auto flex items-center justify-between px-6 py-5">
        <img src={logo} className="w-48 cursor-pointer" alt="" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-bold text-xl text-gray-700 border shadow-lg border-gray-300 py-3 px-10 rounded-full list-none">
          <li>
            <a
              href="/#home"
              className={activeSection === "home" ? "active-link" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/#about-me"
              className={activeSection === "about-me" ? "active-link" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              className={activeSection === "skills" ? "active-link" : ""}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              className={activeSection === "projects" ? "active-link" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className={activeSection === "contact" ? "active-link" : ""}
            >
              Contact
            </a>
          </li>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block ">
          <a
            href="https://drive.google.com/file/d/1fVpW5RjlkGgvJ6ylsrD_v7spFh2W0wGu/view?usp=sharing"
            className="font-bold  bg-indigo-600 text-white px-4  py-2 rounded-md hover:bg-indigo-800 transition-colors duration-300 flex gap-3 shadow-[0_10px_25px_rgba(0,0,0,0.4),0_6px_10px_rgba(0,0,0,0.3)]"
          >
            <FaDownload />  Resume
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
          <a
            href="#home"
            onClick={toggleMenu}
            className="block hover:text-indigo-600 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#about-me"
            onClick={toggleMenu}
            className="block hover:text-indigo-600 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="block hover:text-indigo-600 transition-colors duration-300"
          >
            Skill
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block hover:text-indigo-600 transition-colors duration-300"
          >
            Project
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block hover:text-indigo-600 transition-colors duration-300"
          >
            Contact
          </a>
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
