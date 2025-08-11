import React from 'react'
import './testimonials.css'
import { BiPen } from 'react-icons/bi'
import TProfile1 from '../../assets/avatar1.jpg'
import TProfile2 from '../../assets/avatar2.jpg'
import TProfile3 from '../../assets/avatar3.jpg'
import TProfile4 from '../../assets/avatar4.jpg'


const TestimonialData = [
  {
    image: TProfile1,
    name: 'Mrs. Sarah Wong',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum et possimus illo sint ratione voluptatibus non deleniti repellendus suscipit porro sit molestiae nostrum.',
    date: '12th June, 2025'
  },
  
  {
    image: TProfile2,
    name: 'Mrs. John Doe',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum et possimus illo sint ratione voluptatibus non deleniti repellendus suscipit porro sit molestiae nostrum.',
    date: '2nd July, 2025'
  },

  {
    image: TProfile3,
    name: 'Mrs. Wales Wayne',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum et possimus illo sint ratione voluptatibus non deleniti repellendus suscipit porro sit molestiae nostrum.',
    date: '11th July, 2025'
  },

  {
    image: TProfile4,
    name: 'Mrs. Harris Mutte',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, voluptatum et possimus illo sint ratione voluptatibus non deleniti repellendus suscipit porro sit molestiae nostrum.',
    date: '12th July, 2025'
  },

];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>What Do Our Clients Think?</h5>
      <h2>Their Testimonials</h2>

      <div className="container div__container">
        <div className="testimonial__cards">
          {TestimonialData.map((item, index) => (
            <div className="testimonial__card">
              <div className="testimonial__card-header">
                <span className="quote">"</span>

                <div className="testimonial__profile">
                  <img src={item.image} alt={item.image} className='testimonial__profile-img' />
                  <small className='testimonial__profile-txt'>{item.name}</small>
                </div>
              </div>

              <div className="testimonial__card-body">
                <p>{item.text}</p>
              </div>

              <div className="testimonial__card-footer">
                <code>{item.date}</code>
                <BiPen />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

  )
}

export default Testimonials