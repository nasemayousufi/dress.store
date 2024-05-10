import React from 'react';
//import { Container } from 'react-bootstrap';

import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <div className="profile-image">
        <img src="/images/13.png" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        <img src="/images/14.png" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        <img src="/images/8.png" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        <img src="/images/9.png" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
        <img src="/images/10.png" alt="Nasema Yousufi" style={{ width: '250px', borderRadius: '50%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
      </div>
      <div className="content">
        <div className="description-container">
          <div className="description">
            <h2>About Us</h2>
            <p>
              Founded in Melbourne, Australia and loved across the globe, we're known for our effortlessly wearable and timeless collections that celebrate modern femininity.

              We trade as Forever New in over 25 countries and as Ever New in Canada, the US, and the Philippines with almost 400 retail and concession stores globally.

              While we’re a global brand, behind the scenes we’re a collective of close friends: fashion enthusiasts, designers, and in-store experts, who work non-stop to help our customers embrace and elevate their own personal style.

              Each collection is designed in Australia with a unique blend of seasonal trends, feminine silhouettes, and of-the-moment detailing, giving you the confidence to feel beautiful in every moment.
            </p>
          </div>
        </div>
        <img src="/images/18.jpg" alt="Nasema Yousufi" width={'1250'} />
        <div className="description-container">
          <div className="description">
            <p>
              “We want every moment—no matter how big or small—to feel like it belongs to her. Like she owns it. Wherever she goes, we give her the self-belief and confidence to make the seemingly insignificant, unforgettable.”
            </p>
          </div>
        </div>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DNypfXJTCPU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;