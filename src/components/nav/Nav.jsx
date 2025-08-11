import React, { useState, useEffect } from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { BiFolder } from 'react-icons/bi'
import { BiSupport } from 'react-icons/bi'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newActiveNav = `#${entry.target.id}`
            setActiveNav(newActiveNav)

            // Update the browser's URL without reloading the page
            window.history.replaceState(null, '', newActiveNav)
          }
        })
      },
      { threshold: 0.6 } // Adjust threshold as needed
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <nav>
      <a
        onClick={() => setActiveNav('#header')}
        className={activeNav === '#header' ? 'active' : ''}
        href="#header"
      >
        <AiOutlineHome />
        <span>Home</span>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <AiOutlineUser />
        <span>About</span>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <BiBook />
        <span>Experience</span>
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <BiSupport />
        <span>Services</span>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <BiFolder />
        <span>Projects</span>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BiMessageSquareDetail />
        <span>Contact</span>
      </a>
    </nav>
  )
}

export default Nav