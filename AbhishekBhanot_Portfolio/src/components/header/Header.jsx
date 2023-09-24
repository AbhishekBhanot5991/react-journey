import React from 'react';
import "./Header.css";
import CTA from './CTA';
import ME from '../../assets/mbubbl.png';
import HeaderSocial from './headerSocials';
import Typewriter from 'typewriter-effect';

const Header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5>Hello Everyone</h5>
        <Typewriter 
          onInit={(typewriter)=>{
            typewriter.typeString("<h1>I am Abhishek Bhanot</h1>")
            .pauseFor(2000)
            .deleteAll()
            typewriter.typeString("<h1>Fullstack Developer</h1>")
            .pauseFor(2000)
            .deleteAll()
            typewriter.typeString("<h1>Creative Designer</h1>")
            .pauseFor(2000)
            .deleteAll()
            .start();
          }}
          options={{
            autoStart: true,
            loop: true,
          }}
        />
        {/* <h1>Abhishek Bhanot</h1>
        <h5 className='text-light'>Fullstack Developer</h5> */}
        <CTA/>
        <HeaderSocial/>
        <img src={ME} alt='me' className='first-sec-img'/>
        {/* <div className='me'>
          
        </div> */}

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
  
    </header>
  )
}
export default Header