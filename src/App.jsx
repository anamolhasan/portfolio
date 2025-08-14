
import './App.css'
import AboutMe from './Components/AboutMe'
import AboutUs from './Components/AboutUs'
import Contact from './Components/Contact'
import Hero from './Components/Hero'
import HeroBackground from './Components/HeroBackground'
import Projects from './Components/Projects'
import Skills from './Components/Skills'

import Header from './navbar/Header'

function App() {
 

  return (
    <>
    {/* <HeroBackground /> */}
     <Header />
     <div className='container mx-auto'>
       <Hero />
       {/* <AboutUs /> */}
       <AboutMe />
       <Skills />
       <Projects />
     </div>
       <Contact />
    </>
  )
}

export default App
