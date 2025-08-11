import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaFigma} from 'react-icons/fa6'
import { CgFramer } from "react-icons/cg";
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com" target='_blank'><BsGithub /></a>
        <a href="https://www.figma.com/@mayowa10" target='_blank'><FaFigma /></a>
        <a href="https://framer.com" target='_blank'><CgFramer /></a>
    </div>
  )
}

export default HeaderSocials