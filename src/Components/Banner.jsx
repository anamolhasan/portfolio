import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div
      className="h-[400px] w-full bg-cover bg-center flex items-center justify-center md:block text-white text-3xl font-bold"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="px-20 py-32">
        <p className="text-green-700 text-lg">Hello! I am</p>
        <h1  className="text-5xl font-bold hidden md:block">Anamol Hasan</h1>
        <h3 className="text-2xl text-green-700 pt-5">Full Stack Developer</h3>
        <button className="text-lg border py-1 px-3 mt-2 rounded-md hover:bg-green-800">Resume</button>
      </div>
    </div>
  );
};

export default Banner;
