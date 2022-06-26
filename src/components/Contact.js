// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import './Contact.css'

import React from 'react';

const Contact = ({ contacts }) => {
  return (
      <>
        <div className="contact-container">
          {
            contacts.map((contact) => {
              return (
                  <>
                    <div className="contact-item">
                      <div className="contact-item__image">
                        <img src={contact.photo} alt={contact.name}/>
                      </div>
                      <div className="contact-item__info">
                        <h3>{contact.name}</h3>
                        <p>{contact.phone}</p>
                        <p>{contact.email}</p>
                      </div>
                    </div>
                  </>
              )
            })
          }
        </div>
      </>
  )
}

export default Contact;
