import React from 'react'

const Header = () => {
  return (
    <div className='bg-gray-300'>
        <div className='flex justify-between items-center container mx-auto py-5'>
        <div className='text-3xl font-bold'>Anan</div>
        <div className='space-x-5 font-bold hidden md:block'>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Skill</a>
            <a href="#">Contact</a>
            
           
        </div>
        <div className='font-bold'>
         <a href="#">Resume</a>
        </div>
    </div>
    </div>
  )
}

export default Header