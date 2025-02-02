import Offerings from './Offerings';
import PharmacistSection from './PharmacistSection';
import './App.css';

const MainSection = () => {
  return (
    <section className="main-section">
      <div className="left-side">
        <h2>WESSA PHARMACY IS A FAMILY FOCUSED HEALTH COMPANY</h2>
        <h1>OUR OFFERINGS</h1>
        <Offerings />
      </div>
      <div className="right-side">
        <PharmacistSection />
      </div>
    </section>
  );
};

export default MainSection;