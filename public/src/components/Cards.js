import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my other projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='GPT3 Placeholder'
              label='Artificial Intelligence'
              path='/portfolio'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Stable Diffusion text-to-image generator'
              label='Artificial Intelligence'
              path='/portfolio'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
