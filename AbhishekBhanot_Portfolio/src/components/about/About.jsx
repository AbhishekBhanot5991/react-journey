import React from 'react';
import './About.css';
import ME from "../../assets/mbubbl.png";
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {


  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
          <img src={ME} alt="" />

          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>I am a Web Developer by Profession. I am quite knowledgeable about computer science concepts and contemporary technological developments. My bachelor's degree in information technology is what I have earned. For the past seven years, I have been a freelance web developer.

I've worked with several different technologies, including HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, jQuery, WORDPRESS, WOCOMMERCE, MySQL, REACT, and many more.</p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About