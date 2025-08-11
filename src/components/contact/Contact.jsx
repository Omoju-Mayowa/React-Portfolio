
import React, { useEffect, useState } from 'react';
import './contact.css';
import { MdAttachEmail } from "react-icons/md";
import { BiLogoWhatsapp } from "react-icons/bi";
import { RiTwitterXLine } from "react-icons/ri";

const Contact = () => {
  const [contactOptions, setContactOptions] = useState([]);

  useEffect(() => {
    // Fetch from public folder
    fetch('/assets/data/socials.json')
      .then(res => res.json())
      .then(setContactOptions)
      .catch(console.error);
  }, []);

  // Map icon string to actual component
  const iconMap = {
    MdAttachEmail: <MdAttachEmail />,
    BiLogoWhatsapp: <BiLogoWhatsapp />,
    RiTwitterXLine: <RiTwitterXLine />,
  };

  const Icon = iconMap['option.icon']

  return (
    <section id="contact">
      <h5>You Like Our Skills?</h5>
      <h2>Why Not Book Us</h2>

      <div className="container contact__container">
        <aside className='contact__options'>
          {contactOptions.map((option, index) => (
            <article className="contact__option" key={index}>
                <div className="contact__option-icon">
                  {iconMap[option.icon]}
                </div>
                <h5 className="contact__option-title">
                  {option.title}
                </h5>
                <small className="contact__option-desc">
                  {option.desc}
                </small>
                <a href={option.linkAddress} target={option.linkTarget} rel="noopener noreferrer">{option.linkTitle}</a>
            </article>
          ))}
        </aside>

        <form action="https://formspree.io/f/xgvzrvkj" method='POST' className="contact__main">
          <div>
            <input type="text" required name='Name' placeholder='Enter Your Full Name' />
            <input type="email" required name='Email' placeholder='Enter Your Email Address' />
          </div>

          <label htmlFor="Appointment Date">
            <h4>Schedule a Date for a Meeting</h4>
            <input type="date" required name="Appointment Date"/>
          </label>

          <label htmlFor="Project Categories">
            <h4>What type of project?</h4>
            <select name="Project Categories">
              <option value="Web Development">Web Development</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Mobile App Development">Mobile App Development</option>
              <option value="SEO Services">SEO Services</option>
              <option value="Content Creation">Content Creation</option>
            </select>
          </label>

          <textarea name="desc" rows={10} placeholder='Anything We Should Know?'></textarea>

          <button className="btn btn-primary" type='sybmit'>Submit</button>
        </form>
      </div>
    </section>
  )
}
export default Contact