import './App.css';

const ExperienceSection = () => {
  return (
    <section className="experience-section">
        <h5>Why Choose Wessa Pharmacy</h5>
        <h2><span>#</span>WESSAXEXPERIENCE</h2>
        
        <div className="experience-items">
            <div className="experience-item">
                <img src="/images/great-prices.png" alt="Great Prices" />
                <p><span>#</span>WessaSave</p>
            </div>
            
            <div className="experience-item">
                <img src="/images/private-and-confidential.jpg" alt="Private & Confidential Care" />
                <p><span>#</span>WessaCare</p>
            </div>
        
            <div className="experience-item">
                <img src="/images/fast-delivery.png" alt="Fast Delivery" />
                <p><span>#</span>WessaFast</p>
            </div>
        </div>
    </section>
  );
};

export default ExperienceSection;