import React from 'react'
import Header from '../navbar/Header'
import Hero from '../Components/Hero'
import AboutMe from '../Components/AboutMe'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'
import Contact from '../Components/Contact'

const HomeLayout = () => {
  return (
     <div>
            <header className='sticky top-0 z-50'>
                <Header></Header>
            </header>
            <main className='max-w-[90%] mx-auto space-y-5 my-5'>
                {/* home */}
                <section id='home'>
                    <Hero></Hero>
                </section>
                {/* about */}
                <section id='about'>
                    <AboutMe></AboutMe>
                </section>
                {/* skills */}
                <section id='skills'>
                    <Skills></Skills>
                </section>
                {/* project */}
                <section id='projects'>
                    <Projects></Projects>
                </section>
            </main>
             {/* contact */}
                <section id='contact'>
                    <Contact></Contact>
                </section>
        </div>
  )
}

export default HomeLayout