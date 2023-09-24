// import React from 'react';
import './Contact.css';
import {FaRegEnvelope} from 'react-icons/fa'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Sent");
    emailjs.sendForm( 'service_cmcnp7m', 'template_53qs37q', form.current, 'cgIsUL4jLHBn8MxLq');
    e.target.reset();
  }; 

  return (
    
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className="contact__options">
          <article className="contact__option">
            <FaRegEnvelope className='contact__option-icon' />
            <h4>Email</h4>
            <h5>abhishekbhanot5991@gmail.com</h5>
            <a href='mailto:abhishekbhanot5991@gmail.com'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Abhishek Bhanot</h5>
            <a href='https://m.me/abhishek.bhanot.961'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp  className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91-8437373431</h5>
            <a href='https://api.whatsapp.com/send?phone=+918437373431'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact