import './App.css';
import { FaMobile, FaEnvelope } from 'react-icons/fa'; 

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="service-item logistics">
        <div className="service-image">
          {/* <img src="/images/health-logistics.jpg" alt="Logistics Service" /> */}
          <div className="fixed-image" style={{ backgroundImage: `url(/images/health-logistics.jpg)` }}></div>
          <div className="service-text-overlay">
            <h3>NEED LOGISTICS?</h3>
            <p>Talk To Us</p>
            <button className="contact-btn"><FaMobile /> 08033367472</button>
            <button className="email-btn"><FaEnvelope /> info@wessapharm.com</button>
          </div>
        </div>
      </div>
      <div className="service-item skincare">
        <div className="service-image">
          {/* <img src="/images/skin-care.jpg" alt="Skin Care Consultation" /> */}
          <div className="fixed-image" style={{ backgroundImage: `url(/images/woman-in-spa.jpg)` }}></div>
          <div className="service-text-overlay">
            <h3>WORRIED ABOUT YOUR SKIN?</h3>
            <p>Our Cosmetologists & Beauticians Are Waiting to Help</p>
            <button className="contact-btn"><FaMobile /> 08033367472</button>
            <button className="email-btn"><FaEnvelope /> info@wessapharm.com</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;