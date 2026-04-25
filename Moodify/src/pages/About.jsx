import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Moodify</h1>
        <p>Your personalized bridge between emotions and music.</p>
      </div>

      <section className="about-content">
        <div className="about-card">
          <h2>My Mission</h2>
          <p>
            At Moodify, I believe that music is the way that can express feelings and emotions. 
            My mission is to help you find the perfect soundtrack for every moment of your life, 
            whether you're feeling on top of the world or needing a gentle comfort.
          </p>
        </div>

        <div className="about-card">
          <h2>How It Works</h2>
          <p>
            I use a smart engine to analyze your current mood and favorite genre. 
            By connecting to real-time music databases, I curate a list of tracks 
            that match the energy, valence, and "vibe" you're looking for.
          </p>
        </div>

        <div className="about-card">
          <h2>Tech Stack</h2>
          <ul>
            <li><strong>Frontend:</strong> React & CSS-3</li>
            <li><strong>Backend:</strong> Node.js & Express</li>
            <li><strong>Data:</strong> iTunes Music API</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
