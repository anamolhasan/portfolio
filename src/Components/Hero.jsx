import React from 'react'
import { FaFacebook, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import myPhoto from '../assets/nobackanam.png'

const Hero = () => {
  return (
    <div id='home' className="bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around py-10">
        
        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Anamol Hasan</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            I’m a MERN Stack Developer passionate about building modern, responsive web applications.
          </p>
          
          {/* Hire Me Button */}
          <button className="bg-blue-500 text-white px-16 py-2 rounded-lg hover:bg-blue-600 transition">
            Hire Me
          </button>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-4 mt-5">
            <a href="https://www.facebook.com/an.am.hsan.2024?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-2xl hover:scale-110 transition">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/anamolhasan/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-2xl hover:scale-110 transition">
              <FaLinkedin />
            </a>
            <a href="https://github.com/anamolhasan" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-2xl hover:scale-110 transition">
              <FaGithub />
            </a>
            <a 
              href="https://wa.me/8801950029882"  // এখানে নিজের WhatsApp নাম্বার বসাও
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-green-500 text-2xl hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="pb-10 md:pb-20">
          <img
            src={myPhoto}
            alt="Anamol Hasan"
            className="w-64 md:w-100 drop-shadow-lg rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
