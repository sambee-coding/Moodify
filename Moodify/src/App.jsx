import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './assets/Moodify..png'
import MoodSelector from './pages/MoodSelector'
import Results from './pages/Results'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <>
    <header className='header'>
      <div className='Logo'>
        <img src={logo}alt='Moodify logo'/>
      </div>
      <nav>
        <ul>
          <li><Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>HOME</Link></li>
          <li><Link to="/about" style={{color: 'inherit', textDecoration: 'none'}}>ABOUT</Link></li>
          <li><Link to="/contact" style={{color: 'inherit', textDecoration: 'none'}}>CONTACT</Link></li>
        </ul>
      </nav>
    </header>

    <Routes>
      <Route path="/" element={
        <>
          <div className='Titile'>
            <h1>Find Your Vibe</h1>
            <p>Music For Every Mood</p>
          </div>
          <div className='btn-one'>
            <Link to="/mood">
              <button className='btn-home'>Get Started</button> 
            </Link>
          </div>
          <section className='about-us'>
            <h2>Discover More</h2>
            <p>Experience the features that make Moodify your perfect music companion.</p>
            <div className='extra-links-contianer'>
              <div className='extra-links'>
                <div className='icon'>🎧</div>
                <h3>Personalized Mix</h3>
                <p>Curated tracks that match your exact vibe and genre.</p>
              </div>
              <div className='extra-links' id='extra-links-down'>
                <div className='icon'>✨</div>
                <h3>Free Forever</h3>
                <p>Listen to your favorite artists without any subscription costs.</p>
              </div>
              <div className='extra-links'>
                <div className='icon'>🔥</div>
                <h3>Find Your Vibe</h3>
                <p>Explore music from thousands of artists worldwide.</p>
              </div>
            </div>
          </section>
        </>
      } />
      <Route path="/mood" element={<MoodSelector />} />
      <Route path="/results" element={<Results />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>

    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Moodify. All rights reserved.</p>
      <div className='footer-links'>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
    </>
   
  )
}

export default App
