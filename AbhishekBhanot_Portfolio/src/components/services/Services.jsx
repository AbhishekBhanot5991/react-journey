import React from 'react';
import {BiCheck} from 'react-icons/bi'
import './Services.css';
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User stories.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframes.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Content strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Information architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Brand and design system development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design technology consulting.</p>
            </li>
            
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wordpress Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wocommerce Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>CRM Dashboard</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Responsive Websites</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Apps</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Portals</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Graphic & Video Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visiting Card</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Landing Page Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Short Promotional Video</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Motivational Video</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Video</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>For All Social Media</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Animation Video</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services