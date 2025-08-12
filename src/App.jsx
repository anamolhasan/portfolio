
import './App.css'
import AboutMe from './Components/AboutMe'
import AboutUs from './Components/AboutUs'
import Hero from './Components/Hero'
import Skills from './Components/Skills'

import Header from './navbar/Header'

function App() {
 

  return (
    <>
     <Header />
     <div className='container mx-auto'>
       <Hero />
       {/* <AboutUs /> */}
       <AboutMe />
       <Skills />
     </div>
    </>
  )
}

export default App
