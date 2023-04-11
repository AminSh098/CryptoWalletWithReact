import React from 'react';
import './aboutus.css'

const AboutUs = ({ title, text, img }) => {
  return (
    <div className='CW__aboutUs'>
        <div className='CW__aboutUs-img'>
            <img src={img} alt="" />
        </div>
        <div className='CW__aboutUs-text'>
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default AboutUs