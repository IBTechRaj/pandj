import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>

          <div className="col-lg-5">
            <h1 style={{ fontSize: 48, fontWeight: 600, color: '#0C71C5' }}>Contact</h1>

          </div>
          <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
            <p style={{
              fontSize: 24, fontWeight: 600, color: '#0C71C5'
            }}>
              Welcome to Peace and Joy Fellowship!
            </p>
            <p>
              We would love to hear from you and connect with you! If you have any questions, need further information, or simply want to reach out to us, please feel free to contact us:
            </p>
          </div>
          <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
            <p style={{
              fontSize: 24, fontWeight: 600, color: '#0C71C5'
            }}>Visit:  </p><p>
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
      </div>
    </div>
  );
}

export default Contact;