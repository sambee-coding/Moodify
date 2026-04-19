import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import logo from './assets/Moodify..png'
import MoodSelector from './pages/MoodSelector'

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
        <li>ABOUT</li>
        <li>CONTACT</li>
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
        </>
      } />
      <Route path="/mood" element={<MoodSelector />} />
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
