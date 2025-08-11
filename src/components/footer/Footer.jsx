import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";

import './footer.css';


const Footer = () => {
  return (
    <section className='footer'>
      <div className="container footer__container">
        <h1>Webs</h1>
        <ul className="footer__links">
          <li>
            <a href="#header">Header</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">My Experiences</a>
          </li>
          <li>
            <a href="#services">My Services</a>
          </li>
          <li>
            <a href="#portfolio">My Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="#" className="social__link">
            <FaFacebookF />
          </a>
          <a href="#" className="social__link">
            <AiFillInstagram />
          </a>
          <a href="#" className="social__link">
            <BsTwitterX />
          </a>
        </div>
        <div className="copyright">
          <small>&copy; Nox Portfolio. All Rights Reserved</small>
        </div>
      </div>
    </section>
  )
}

export default Footer