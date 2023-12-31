import React from 'react';
import myLogo from '../../assets/footer-logo.png'
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'><img src={myLogo} alt="" /></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.facebook.com/profile.php?id=100086979909395" target="_blank" rel="noreferrer"><FaFacebookF /></a>
        <a href="https://www.instagram.com/bhanotabhishek/" target="_blank" rel="noreferrer"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/abhishek-bhanot-714a33147/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AbhishekBhanot5991" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://dribbble.com/bhanotabhishek" target="_blank" rel="noreferrer"><FiDribbble /></a>
      </div>
    </footer>
  )
}

export default Footer