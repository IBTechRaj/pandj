import React from "react";
import contact from "../pics/contact.png"
import ContactForm from './ContactForm'

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row justify-content-center my-5 py-2">
          <img src={contact} alt="img missing" />
        </div>
        {/* <ContactForm /> */}
        <div className="row justify-content-center">
          <h1 style={{ fontSize: 48, fontWeight: 600, color: '#0C71C5' }}>Contact</h1>
        </div>
        <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
          <p>
            We would love to hear from you and connect with you! If you have any questions, need further information, or simply want to reach out to us, please feel free to contact us:
          </p>
        </div>
        <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
          <p style={{
            fontSize: 24, fontWeight: 600, color: '#0C71C5'
          }}>Visit:
            If you would like to visit our church in person,  </p>
          <div style={{ margin: 80 }}>
            <p style={{
              fontSize: 24, fontWeight: 600, color: '#0C71C5'
            }}> Address :<br></br>
              Amrutavani Complex,<br></br>
              Second Floor, Sebastian Road,<br></br>
              Secunderabad - 500003<br></br>
              India <br></br>
              Email: peacejoyfc@gmail.com<br></br>

            </p>
          </div>
          {/* <ContactForm /> */}
          <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
            <p>
              We welcome you to join us for our worship services, events, and programs.
            </p>
            <p>

              We strive to respond to all emails in a timely manner and will do our best to assist you.
            </p>
            <p>
              Contact Form: You can fill out the contact form. Simply provide your name, email address, and your message, and we will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
      <div className="py-5" style={{ border: "2px" }}>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;