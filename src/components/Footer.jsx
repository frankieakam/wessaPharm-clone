import './App.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaAngleUp } from 'react-icons/fa';

const Footer = () => {
    // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>Copyright All Rights Reserved, Wessa Pharmacy.</p>
                <div className="social-icon">
                    <a href=""> <FaFacebookF size={18} /> </a>
                    <a href=""> <FaTwitter size={18} /> </a>
                    <a href=""> <FaInstagram size={18} /> </a>
                    <button onClick={scrollToTop} className="back-to-top"><FaAngleUp size={18} /> </button>
                </div>
                
            </div>
        </footer>
    );
};
  
export default Footer;