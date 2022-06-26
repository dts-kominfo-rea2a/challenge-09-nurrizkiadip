// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css'

import React from 'react';

const Contact = ({ data }) => {
  return (
      <>
          <div className="contact-item">
            <div className="contact-item__image">
              <img src={data.photo} alt={data.name}/>
            </div>
            <div className="contact-item__info">
              <h3>{data.name}</h3>
              <p>{data.phone}</p>
              <p>{data.email}</p>
            </div>
          </div>
      </>
  )
}

export default Contact;
