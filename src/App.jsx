import React, { useEffect } from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    const hash = window.location.hash
    if (hash) {
      const section = document.querySelector(hash)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App