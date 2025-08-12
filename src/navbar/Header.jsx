import React from 'react'

const Header = () => {
  return (
    <header className='bg-gray-100 shadow-md sticky top-0 z-50'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6'>
        <div className='text-3xl font-extrabold text-indigo-600 cursor-pointer'>
          Anan
        </div>
        <nav className='hidden md:flex space-x-8 font-semibold text-gray-700'>
          <a href="#home" className="hover:text-indigo-600 transition-colors duration-300">Home</a>
          <a href="#about-me" className="hover:text-indigo-600 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-indigo-600 transition-colors duration-300">Skill</a>
          <a href="#contact" className="hover:text-indigo-600 transition-colors duration-300">Contact</a>
        </nav>
        <div>
          <a 
            href="#" 
            className="font-semibold bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
