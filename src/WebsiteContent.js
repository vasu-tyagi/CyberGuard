import React from 'react';
import './WebsiteContent.css';

function WebsiteContent() {
  return (
    <div className="website-content">
      <header className="header">
        <div className="header-content">
          <h1 className="title">DY Patil University</h1>
          <p className="subtitle">Empowering Minds, Transforming Lives</p>
        </div>
        <nav className="navbar">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About Us</a>
          <a href="#" className="nav-link">Courses</a>
        </nav>
      </header>
      <div className="main-content-container">
        <div className="main-content">
          <div className="highlight-item">
            <h2>Explore Our Campus</h2>
            <p>Take a virtual tour of our state-of-the-art facilities.</p>
          </div>
          <div className="highlight-item">
            <h2>Our Programs</h2>
            <p>Discover a wide range of programs tailored to your interests.</p>
          </div>
          <div className="highlight-item">
            <h2>Faculty Excellence</h2>
            <p>Meet our esteemed faculty members who are leaders in their fields.</p>
          </div>
          <div className="highlight-item">
            <h2>Student Life</h2>
            <p>Experience a vibrant campus life with clubs, events, and more.</p>
          </div>
          <div className="placeholder-item">
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteContent;
