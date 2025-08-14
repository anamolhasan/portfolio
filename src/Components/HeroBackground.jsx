import React from "react";
import bgImage from "../assets/background1.jpg"; // assets থেকে import

const HeroBackground = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg beginner">
          স্বাগতম!
        </h1>
        <p className="mt-4 text-xl md:text-2xl drop-shadow-md roboto">
          React + Tailwind দিয়ে দৃষ্টিনন্দন hero section
        </p>
        <button className="mt-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full text-white font-semibold hover:bg-white/30 transition">
          আমার Portfolio দেখুন
        </button>
      </div>
    </div>
  );
};

export default HeroBackground;
