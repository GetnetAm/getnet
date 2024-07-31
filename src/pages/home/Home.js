import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Skills from '../skills/Skills'
import About from '../about/About'
import Certeficate from '../certeficate/Certeficate'
import Education from '../education/Education'
import Footer from '../footer/Footer'
import TestimonialA from '../testimonials/TestimonialA'
import Portfoilo from '../portfolio/Portfoilo'



function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Education />
        <Certeficate />
        <Skills />
        <Portfoilo />
        <TestimonialA />
       
  
        <Footer />
       
       
      
    </div>
  )
}

export default Home
