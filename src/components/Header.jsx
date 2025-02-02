import './App.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <>
      <div className="contact-info">
        <p>Call Us: 08033364722, 08092219611, 07085237167</p>

        <div className="social-icons">
          <FaFacebookF size={12} />
          <FaTwitter size={12} />
          <FaInstagram size={12} />
        </div>
      </div>
    
      </>
    </header>
  );
};

export default Header;