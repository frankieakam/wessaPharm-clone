import Header from './components/Header';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import QualitySection from './components/QualitySection';
import ServicesSection from './components/ServicesSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <MainSection />
      <QualitySection />
      <ServicesSection />
      <ExperienceSection />
      <Footer />
    </div>
  );
}

export default App;