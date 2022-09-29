import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { Button } from './Button';


function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Leave your contact email below:
        </p>
        <div className='input-areas'>
          <form>
            <input className='footer-input' name='email' type='email' placeholder='Your Email'/>
            <Button buttonStyle='btn--outline'>Submit</Button>
          </form>
          <p className='footer-subscription-text'>
          I will be in touch within 3 days!
        </p>
        </div>
      </section>
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                <h2>About Me</h2>
                    <Link to='/aboutme'>Who am I?</Link>
                    <Link to='/experience'>Experience</Link>
                    <Link to='/portfolio'>Skills</Link>
                    <Link to='/references'>References</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                <h2>Contact Me</h2>
                    <Link to='/contact'>Email</Link>
                    <Link to='/contact'>Phone</Link>
                    <Link to='/contact'>Address</Link>
                    <Link to='/'>LinkedIn</Link>
                </div>
            </div>
        </div>
        <section>
            <div class='social-media-wrap'>
                <div class='social-icons'>
                    <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='LinkedIn'>
                    <i class='fab fa-linkedin' />
                    </Link>
                </div>
            </div>
            <small class='website-rights'>Raipia @ 2022</small>
        </section>
    </div>
  );
}

export default Footer