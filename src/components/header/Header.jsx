import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <section id='header' >
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>᭙ꫀ᥇ᦓ</h1>
        <h4 className='text-light'>Omoju S. Mayowa</h4>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="Me" />
        </div>

        <a href="#contact" className='scroll__down'><span>Scroll Down</span></a>
      </div>
    </section>
  )
}

export default Header