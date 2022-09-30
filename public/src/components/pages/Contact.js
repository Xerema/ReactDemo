import React from 'react';
import Cards from '../Cards';
import ContactInfo from '../ContactInfo';

function Contact() {
  return (
    <div className='contact-container'>
        <>
        <ContactInfo />
        <Cards />
        </>
    </div>
  );
}

export default Contact;