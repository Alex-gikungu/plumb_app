// About.jsx
import React from 'react';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBullseye,
  faEye,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';

const About = () => {
  return (
    <>
      <NavBar/>
      <div className="about-container">
        <img src="./about.jpeg" alt="About Us" className="about-image" />
        <div className="about-content">
          <div className="about-card mission-card">
            <h2>
              <FontAwesomeIcon icon={faBullseye} /> Mission
            </h2>
            <p>
              M.solutions' mission is to provide high-quality, reliable, and
              cost-effective services to customers in their repair and
              installation needs. Our mission is to be a leader in the
              industry, setting the standard for safety, innovation, customer
              service, and quality, and creating a positive work environment
              for our employees and partners. We strive to be a reliable and
              responsible partner to our customers, helping them meet their
              needs through cutting-edge technology, quality workmanship, and
              cost-efficiency.
            </p>
          </div>
          <div className="about-card vision-card">
            <h2>
              <FontAwesomeIcon icon={faEye} /> Vision
            </h2>
            <p>
              M.solutions aims to become the premier provider of plumbing
              services in the area. The company strives to provide honest and
              professional service while delivering quality craftsmanship,
              reasonable prices, and superior customer service.
            </p>
          </div>
          <div className="about-card why-us-card">
            <h2>
              <FontAwesomeIcon icon={faCheckCircle} /> Why Choose Us?
            </h2>
            <p>
              Our commitment to excellence and customer satisfaction sets us
              apart. With a team of skilled professionals and a dedication to
              delivering the best plumbing services, we are your trusted
              partner for all your plumbing needs.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
