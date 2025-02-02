import { FaWhatsapp } from 'react-icons/fa';
import { FaGift } from 'react-icons/fa';
import './App.css';

const Offerings = () => {
  return (
    <>
  
    <div className="offerings">
      <ul>
        <li>24 hours, 7 days a week wellness solution</li>
        <li>Homecare(In-home nursing care, elderly care, diet support & pain management)</li>
        <li>Consultations from our pharmacists</li>
        <li>Nationwide Delivery (free within Calabar & Abakaliki Only)</li>
        <li>Assurance of genuine & certified medications</li>
      </ul>
    </div>

    <div className="buttons">
      <div>
        <button className="whatsapp-btn">Whatsapp Us<FaWhatsapp size={30}/></button>
      </div>

      <div>
        <button className="services-btn">View Our Services<FaGift size={30}/></button>
      </div>
    </div>
    
    </>
  );
};

export default Offerings;