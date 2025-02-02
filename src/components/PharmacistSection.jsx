import { useState } from 'react';
import './App.css';

const images = [
  { src: "/images/pain-management-1.jpg", alt: "Pain Management 1" },
  { src: "/images/pain-management.jpg", alt: "Pain Management" }
];

const PharmacistSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    if (currentImageIndex < images.length - 1) { setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Function to move to the previous image
  const prevImage = () => { if (currentImageIndex > 0) {
    setCurrentImageIndex(currentImageIndex - 1);
  }
  };

  return (
    <div className="pharmacist-section">
      <div className="main-image">
        <img src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} className={currentImageIndex === 0 ? 'slide-in-from-left' : 'slide-in-from-right'} />
      </div>

      <div className="thumbnails">
        <button onClick={prevImage} disabled={currentImageIndex === 0}>
          <img src={images[0].src} alt="Prewious" className='thumbnail' />
        </button>

        <button onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
          <img src={images[1].src} alt="Next" className='thumbnail' />
        </button>
      </div>
    </div>
  );
};

export default PharmacistSection;