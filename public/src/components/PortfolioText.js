import React from 'react';
import CardItemPortfolio from './CardItemPortfolio';
import './PortfolioText.css';

function PortfolioText() {
    return (
      <div className='portfolio'>
        <h1>Check out my previous projects!</h1>
        <div className='portfolio__container'>
          <div className='portfolio__wrapper'>
            <ul className='portfolio__items'>
              <CardItemPortfolio
                src='images/img-3.jpg'
                text='GPT3 Placeholder'
                label='Artificial Intelligence'
                path='/portfolio'
              />
              <CardItemPortfolio
                src='images/img-1.jpg'
                text='Stable Diffusion text-to-image generator'
                label='Artificial Intelligence Pictures'
                path='/portfolio/stablediffusion'
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }

export default PortfolioText;