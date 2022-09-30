import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>NEW EMPLOYEE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'> 
      <Link to='/aboutme'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
          LEARN MORE
        </Button>
        </Link>
        <Link to='/opencv'>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
          REVIEW CV <i className='fa fa-file-pdf' />
        </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
