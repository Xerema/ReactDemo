import React from 'react';
import { Link } from 'react-router-dom';

function CardItemPortfolio(props) {
  return (
    <>
      <li className='portfolio__item'>
        <Link className='portfolio__item__link' to={props.path}>
          <figure className='portfolio__item__pic-wrap' data-category={props.label}>
            <img className='portfolio__item__img' alt='Placeholder img' src={props.src}/>
          </figure>
          <div className='portfolio__item__info'>
            <h5 className='portfolio__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItemPortfolio;
