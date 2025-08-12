import React from 'react'
import aboutImg from '../assets/nobackanam.png' // নিজের ইমেজ বসাও

const AboutUs = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-5">
        
        {/* Image Section */}
        {/* <div className="flex-1">
          <img
            src={aboutImg}
            alt="About Us"
            className="rounded-lg shadow-lg w-full"
          />
        </div> */}

        {/* Text Section */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-6">
            We are passionate about creating innovative web solutions that help businesses grow
            and connect with their customers. Our mission is to deliver high-quality, modern, and
            user-friendly applications that meet our clients’ needs.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>🚀 Modern web development with MERN stack</li>
            <li>🎯 Focus on performance & user experience</li>
            <li>🤝 Dedicated to client satisfaction</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default AboutUs
