import React from 'react'
import myPhoto from '../assets/nobackanam.png'

const Hero = () => {
  return (
    <div className="bg-gray-100 p-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-5">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Anamol Hasan</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            I’m a MERN Stack Developer passionate about building modern, responsive web applications.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Hire Me
          </button>
        </div>

        {/* Image Section */}
        <div className="mt-8 md:mt-0">
          <img
            src={myPhoto}
            alt="Anamol Hasan"
            className="w-64 md:w-80 drop-shadow-lg rounded-full"
          />
        </div>

      </div>
    </div>
  )
}

export default Hero
