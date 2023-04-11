import React from 'react';
import { WatchVid, GP } from '../../assets/index';
import './header.css';

const Header = () => {
  return (
    <div className='CW__header'>
      <div className='CW__header_container'>
        <div className='CW__header-text'>
          <h1>Save Time and Start Digital Wallet!</h1>
          <p>A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  </p>
          
          <div className='CW__header-img-smallPhones'>
            <img src={GP} alt="appPhoto" />
          </div>

          <div className='CW__header_text-start'>
            <button type="button">Get Started</button>
            <img src={WatchVid} alt="YouTubeVideo" />
          </div>
          <div className='CW__header_text_start-Subs'>
            <div className='CW__header-users'>
              <h3>1.9k+</h3>
              <p>Active Users</p>
            </div>
            <div className='CW__header-features'>
              <h3>20+</h3>
              <p>New Features</p>
            </div>
          </div>
        </div>
        <div className='CW__header-img'>
          <img src={GP} alt="appPhoto" />
        </div>
      </div>
    </div>
  )
}

export default Header