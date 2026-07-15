import React, { useState, useEffect, useRef } from 'react';
import './birthday.css';

import img1 from '../../Images/ULTAH1.jpeg';
import img2 from '../../Images/ULTAH2.jpeg';
import img3 from '../../Images/ULTAH3.jpeg';

import birthdayMusic from '../Music/songultah.mp3';

function Birthday() {
  const [isPlaying, setIsPlaying] = useState(true); 
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef(new Audio(birthdayMusic));

  useEffect(() => {
    audioRef.current.loop = true; 
    
    audioRef.current.play().catch(error => console.log("Autoplay diblokir browser, klik tombol untuk memutar"));

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowContent(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMusic = () => {
    if (isPlaying) { 
      audioRef.current.pause();
    } else { 
      audioRef.current.play(); 
    }
    setIsPlaying(!isPlaying);
  };

  const flowers = Array.from({ length: 15 }).map((_, i) => (
    <div key={i} className="sakura" style={{
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 5 + 5}s`,
      animationDelay: `${Math.random() * 5}s`
    }}>🌸</div>
  ));

  const bubbles = Array.from({ length: 12 }).map((_, i) => (
    <div key={i} className="bubble" style={{
      left: `${Math.random() * 100}%`,
      animationDuration: `${Math.random() * 8 + 7}s`,
      animationDelay: `${Math.random() * 5}s`
    }}></div>
  ));

  return (
    <div className="birthday-container">
      <div className="sakura-container">{flowers}</div>
      
      {showContent && <div className="bubble-container">{bubbles}</div>}
      
      {/* Jika isPlaying true, tampilkan ikon speaker silang (mute) */}
      <button className="music-button" onClick={toggleMusic}>
        {isPlaying ? "🎵" : "🔇"}
      </button>

      <div className="cover-page">
        <h1 className="main-title">
          Happy <br />
          <span className="highlight-pink">Birthday</span> <br />
          Cikitta
        </h1>
        <div className="divider"></div>
        <p className="scroll-hint">JUNE 16 • THE MOST SPECIAL DAY</p>
      </div>

      <div className={`content-section ${showContent ? 'fade-in' : ''}`}>
        <div className="scrapbook-canvas">
          
          <div className="letter-card">
            <h3>To my dearest bestie,</h3>
            <p>Happy birthday, Cikitta! So grateful to have a friend like you. Thank you for all the laughs and for being such an amazing person! ✨👯‍♀️</p>
          </div>

          <div className="polaroid-stack">
            <div className="polaroid p-animate-1">
              <img src={img3} alt="Kenangan 1" />
              <p className="caption">Bestie goals! 👯‍♀️</p>
            </div>
            
            <div className="polaroid p-animate-2">
              <img src={img2} alt="Kenangan 2" />
              <p className="caption">So much fun! ✨</p>
            </div>
            
            <div className="polaroid p-animate-3">
              <img src={img1} alt="Kenangan 3" />
              <p className="caption">You're the best! 🍬💓</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Birthday;