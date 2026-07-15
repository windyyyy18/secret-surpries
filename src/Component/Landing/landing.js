import React, { useState } from 'react';
import './landing.css';
import amplopImage from '../../Images/amplopultah.png'; 

function Landing({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const flowers = Array.from({ length: 25 });

  const handleEnvelopeClick = () => {
    setIsOpening(true); 
    setTimeout(() => {
      onOpen(); 
    }, 1200); 
  };

  return (
    <div className="landing-container">
      {/* Bunga tetap di latar belakang */}
      {flowers.map((_, i) => (
        <div key={i} className="flower" style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 7}s`,
            animationDelay: `${Math.random() * 5}s`
        }}>
          {i % 2 === 0 ? '🌸' : '💜'}
        </div>
      ))}

      {/* Konten scrollable */}
      <div className="landing-content">
        <h1>Tap the envelope to open it!</h1>
        
        <img 
          src={amplopImage} 
          alt="Amplop Surprise" 
          className={`envelope-button ${isOpening ? 'opening' : ''}`}
          onClick={handleEnvelopeClick}
        />
        
        <p>Open the envelope to continue!</p>
      </div>
    </div>
  );
}

export default Landing;