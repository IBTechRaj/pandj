import React from "react";
import about from "../pics/About_Us_3.png"

function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5 py-2">
          <img style={{ width: "100%", height: 300 }} src={about} alt="img missing" />
        </div>
        <div className="row justify-content-center">
          <h1 style={{ fontSize: 48, fontWeight: 600, color: '#0C71C5' }}>About</h1>
        </div>

        <div className="row align-items-center my-5" style={{ fontSize: 24, fontWeight: 400 }}>
          <p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Welcome to Peace and Joy Fellowship!
          </p>
          <p>
            We are a vibrant and diverse community of believers passionately pursuing God's presence, experiencing His peace, and spreading His joy.
            We invite you to join us on this exciting journey of faith as we strive to make a difference in our world for Lord Jesus Christ.
          </p>
          <p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}> Our Story </p><p>

            PJFC was founded with a vision to create a place where people from all walks of life can come together to worship, grow, and serve.
            Though we are new and small in number, we have seen and experienced God's abundant faithfulness and grace at work in our midst.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Our Beliefs
          </p><p>
            At PJFC, we hold firmly to the timeless truths of the Christian faith as revealed in the Bible. We believe in the authority of Scripture,
            the Trinity, the love of GOD the Father, the deity of Lord Jesus Christ, and the empowering work of the Holy Spirit. We are committed to
            practising our faith and showing God's love and compassion to those around us. Check our detailed  <a href="/pandj#/statement">doctrinal statement</a>  here.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Our Worship
          </p><p>
            Relevant and practical teaching of GOD’s Word at the heart of who we are at PJFC. We seek to create an atmosphere where people can experience God's
            presence and be transformed by His love.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Our Community
          </p><p>
            At PJFC, we value authentic relationships and a sense of family. We are a diverse and inclusive community, welcoming people from all backgrounds,
            cultures, and ages. We believe that we are better together and strive to create a warm and welcoming environment where everyone feels loved,
            accepted, and valued.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Our Ministries
          </p><p>
            We are passionate about equipping and empowering our members to fulfil their God-given purpose. Our ministries are designed to help people
            grow spiritually, connect with others, and serve our community and beyond. From dynamic children's and youth programs, to engaging Bible studies,
            to impactful outreach initiatives, there is a place for everyone to get involved and make a difference.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Our Vision
          </p><p>
            We started PJFC with a vision to strengthen believers in the sincere Christian faith. We want to be a beacon of hope and transformation in our
            community and beyond, shining the light of Lord Jesus Christ through our lives and actions. We are committed to sharing the good news of the gospel of
            Lord Jesus Christ, discipling the fellow christians, and being a force for positive change in our world.
          </p><p style={{
            fontSize: 24, fontWeight: 700, color: '#0C71C5'
          }}>
            Join Us!
          </p><p>
            We invite you to be a part of our PJFC family. Whether you are a lifelong believer, a seeker, or somewhere in between, you are welcome here.
            Come as you are, and experience God’s love, joy, and peace in our midst. We look forward to meeting you, journeying with you, and celebrating
            God's goodness together!
          </p><p>
            Ready to take the next step? Join us for one of our worship services, or connect with us through our website or social media channels.
            We welcome you into our PJFC family!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;