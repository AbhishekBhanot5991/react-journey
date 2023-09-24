import React from 'react';
import './Testimonials.css';
import IMGTESTIMONIAL1 from '../../assets/guy-in-suit.jpg';
import IMGTESTIMONIAL2 from '../../assets/guy-in-suit.jpg';
import IMGTESTIMONIAL3 from '../../assets/guy-in-suit.jpg';
import IMGTESTIMONIAL4 from '../../assets/guy-in-suit.jpg';

// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar:IMGTESTIMONIAL1,
    name: 'Shairy Kalra',
    review: 'Abhishek helped me throughout the entire project and exceeded my expectations in every way. He was not only friendly and approachable, but I also had a lot of confidence in his ability to understand and clearly state our main disagreements. He is dependable, capable, and easy to deal with. I cannot say enough wonderful things about him, and I am forward to continue working with him.'
  },
  {
    avatar:IMGTESTIMONIAL2,
    name: 'Madhav Bansal',
    review: 'Abhishek responded to my request for assistance regarding problems with a Wordpress website quite quickly and was very helpful. His expertise was profound. Even better, his counsel enabled me to resolve the issues, and he refused to accept anything for that really honest individual! Abhishek Bhanot, thank you. '
  },
  {
    avatar:IMGTESTIMONIAL3,
    name: 'Rajat Sharma',
    review: 'One of the best programmers out there without a doubt. When I am lost, I always turn to Abhishek, and he never fails to provide what I ask for. Smart, reliable, and competent. You will not be let down. '
  },
  {
    avatar:IMGTESTIMONIAL4,
    name: 'Vishal Sharma',
    review: 'Keeping up with a highly dated website is made much easier by Abhishek.He completes whatever I ask of him swiftly and effectively; without him, I would be lost. '
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      {/* <div className='container testimonials__container'>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={IMGTESTIMONIAL1} alt="" />
          </div>
            <h5 className='client__name'>Shairy Kalra</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta repellendus distinctio minima voluptas, delectus, illum quo ducimus tempora assumenda porro soluta in ad enim repudiandae commodi inventore quam rerum.</small>
          
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={IMGTESTIMONIAL2} alt="" />
           
          </div>
            <h5 className='client__name'>Rajat Sharma</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta repellendus distinctio minima voluptas, delectus, illum quo ducimus tempora assumenda porro soluta in ad enim repudiandae commodi inventore quam rerum.</small>
          
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={IMGTESTIMONIAL3} alt="" />
       
          </div>
            <h5 className='client__name'>Ganesh Chaudhary</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta repellendus distinctio minima voluptas, delectus, illum quo ducimus tempora assumenda porro soluta in ad enim repudiandae commodi inventore quam rerum.</small>
          
        </article>
        <article className='testimonial'>
          <div className='client__avatar'>
            <img src={IMGTESTIMONIAL4} alt="" />
          </div>
            <h5 className='client__name'>Girish Bhambri</h5>
            <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dicta repellendus distinctio minima voluptas, delectus, illum quo ducimus tempora assumenda porro soluta in ad enim repudiandae commodi inventore quam rerum.</small>
          
        </article>
      </div> */}
      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
     
      >
        {
          data.map(({avatar,name,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>                
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials