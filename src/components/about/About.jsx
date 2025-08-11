import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa6'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className='about__icon' />

              <h5>Experience</h5>
              <small>3+ Years</small>
            </article>

            <article className="about__card">
              <FiUsers  className='about__icon' />

              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary  className='about__icon' />

              <h5>Projects</h5>
              <small>120+ Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta soluta pariatur libero impedit, iure hic officiis vitae rem aut autem!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Discuss Project</a>
        </div>
      </div>
    </section>
  )
}

export default About