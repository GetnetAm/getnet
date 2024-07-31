import React from 'react'
import "./home.css"
import Hero from '../hero/Hero'
import Portfolio from '../portfolio/Portfolio'
import Skills from '../skills/Skills'
import About from '../about/About'
import Certeficate from '../certeficate/Certeficate'
import Education from '../education/Education'
import Footer from '../footer/Footer'
import TestimonialA from '../testimonials/TestimonialA'

function Home() {
  return (
    <div>
        <Hero />
        <About />
        <Education />
        <Certeficate />
        <Skills />
        <Portfolio />
        <TestimonialA />

        <Footer />
       
       
      
    </div>
  )
}

export default Home
