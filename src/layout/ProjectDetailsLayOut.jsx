import React from 'react'
import Header from '../navbar/Header'
import { Outlet } from 'react-router'
import Contact from '../Components/Contact'

const ProjectDetailsLayOut = () => {
  return (
    <div>
      <header className=''>
        <Header />   
      </header >
      <main  className='container mx-auto mt-24'>
         <Outlet />
      </main>
      <Contact />
    </div>
  )
}

export default ProjectDetailsLayOut