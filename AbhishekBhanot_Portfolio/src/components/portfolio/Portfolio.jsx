import React from "react";
import IMG1 from "../../assets/daynightdispatch.jpg";
import IMG2 from "../../assets/wordpress.jpg";
import IMG3 from "../../assets/Lawyer.jpg";
import IMG4 from "../../assets/project-jagansons.jpg";
import IMG5 from "../../assets/project.png";
import IMG6 from "../../assets/shairy-portfolio.jpg";
import "./Portfolio.css";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Dispatching",
    // github: 'https://github.com/AbhishekBhanot5991',
    demo: "https://daynightdispatch.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Consultant",
    // github: 'https://github.com/AbhishekBhanot5991',
    demo: "https://uniallianz.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Lawyer",
    // github: 'https://github.com/AbhishekBhanot5991',
    demo: "https://www.jalandharlawyer.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Security Clothes",
    // github: 'https://github.com/AbhishekBhanot5991',
    demo: "https://jagansons.com/",
  },
  {
    id:5,
    image:IMG5,
    title:'Sports',
    // github: 'https://github.com/AbhishekBhanot5991',
    demo : 'http://spogoophase2.impetusaisolutions.com/'
  },
  {
    id: 6,
    image: IMG6,
    title: "Portfolio",
    // github: 'https://github.com/AbhishekBhanot5991',
    demo: "https://ershairykalra.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3 className='portfolio__item-h3'>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
          <a href="https://github.com" className='btn'>Github</a>
          <a href="https://dribble.com" className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
          </div>
        </article> */}
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3 className="portfolio__item-h3">{title}</h3>
              <div className="portfolio__item-cta">
                {/* <a href={github} target='_blank' rel='noreferrer' className='btn'>Github</a> */}
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
