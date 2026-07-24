import { useState } from 'react';
import profileImage from '../assets/profile-placeholder.svg';

// Hero shows the opening introduction, profile image, and a button that changes text.
function Hero() {
  const [buttonText, setButtonText] = useState('View My Projects');

  const handleButtonClick = () => {
    setButtonText((currentText) =>
      currentText === 'View My Projects' ? 'Thanks for visiting!' : 'View My Projects'
    );
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div>
          <p className="eyebrow">ERA Technologies Developer Training Program</p>
          <h2>Hello, I&apos;m Asana Maltiti Abdulai</h2>
          <h3>Computer Information Systems Student</h3>
          <p className="hero-text">
            I am passionate about cybersecurity, artificial intelligence, software development,
            and solving real-world problems with creative technology.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn" onClick={handleButtonClick}>
              {buttonText}
            </button>
            <a href="#contact" className="secondary-link">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-image-card">
          <img src={profileImage} alt="Placeholder profile illustration for Asana Maltiti Abdulai" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
