import React from 'react';
import './portfolio.css';
import project1 from '../../assets/portfolio1.jpg';
import project2 from '../../assets/portfolio2.jpg';
import project3 from '../../assets/portfolio3.jpg';
import project4 from '../../assets/portfolio4.jpg';
import project5 from '../../assets/portfolio5.png';
import project6 from '../../assets/portfolio6.jpg';
// import Swiper core and required modules
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// Portfolio data
const portfolioData = [
  {
    image: project1,
    title: 'UI/UX Project 1',
    link: 'https://framer.com',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
  {
    image: project2,
    title: 'UI/UX Project 2',
    link: '#',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
  {
    image: project3,
    title: 'UI/UX Project 3',
    link: '#',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
  {
    image: project4,
    title: 'UI/UX Project 4',
    link: '#',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
  {
    image: project5,
    title: 'UI/UX Project 5',
    link: '#',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
  {
    image: project6,
    title: 'UI/UX Project 6',
    link: '#',
    linkName: 'Framer',
    secondaryLink: '#',
    secondaryLinkName: 'Live Demo',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What have I been up to?</h5>
      <h2>My Recent Projects</h2>

      <Swiper
        className="container portfolio__container"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {portfolioData.map((item, index) => (
          <SwiperSlide className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
              <a href={item.link} target="_blank" className="btn">
                {item.linkName}
              </a>
              <a href={item.secondaryLink} target="_blank" className="btn btn-primary">
                {item.secondaryLinkName}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Portfolio;