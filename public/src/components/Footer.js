import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
//import RegisterAuth from './RegisterAuth';


function Footer() {
  return (
    <div className='footer-container'>
        <div class='footer-links'>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                <h2>About me</h2>
                    <Link className='footer-link-items-text' to='/aboutme'>Who am I?</Link>
                    <Link className='footer-link-items-text' to='/experience'>Experience</Link>
                    <Link className='footer-link-items-text' to='/portfolio'>Portfolio</Link>
                    <Link className='footer-link-items-text' to='/contact'>Contact Me</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div class='footer-link-items'>
                <h2>Contact Me</h2>
                    <Link className='footer-link-items-text-c' to='/contact'>Raipia@hotmail.com</Link>
                    <Link className='footer-link-items-text-c' to='/contact'>+358 46 585 6001</Link>
                    <Link className='footer-link-items-text-c' to='/contact'>Vaasa, 65230</Link>
                    <Link className='footer-link-items-text-c' to='/contact'>Finland</Link>
                </div>
            </div>
        </div>
        <section>
            <div class='social-media-wrap'>
                <div class='social-icons'>
                    <Link class='social-icon-link facebook' to='/facebook' aria-label='Facebook'>
                    <i class='fab fa-facebook-f' />
                    </Link>
                    <Link class='social-icon-link instagram' to='/instagram' aria-label='Instagram'>
                    <i class='fab fa-instagram' />
                    </Link>
                    <Link class='social-icon-link youtube' to='/youtube' aria-label='Youtube'>
                    <i class='fab fa-youtube' />
                    </Link>
                    <Link class='social-icon-link twitter' to='/twitter' aria-label='Twitter'>
                    <i class='fab fa-twitter' />
                    </Link>
                    <Link class='social-icon-link linkedin' to='/linkedin' aria-label='LinkedIn'>
                    <i class='fab fa-linkedin' />
                    </Link>
                    <Link class='social-icon-link github' to='/github' aria-label='GitHub'>
                    <i class='fab fa-github' />
                    </Link>
                </div>
            </div>
            <small class='website-rights'>Raipia @ 2022</small>
        </section>
    </div>
  );
}

export default Footer