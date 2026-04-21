import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Results.css';
//link used to navigate betwen pages
//useLocation used to get the data passed from the MoodSelector form!
function Results() {
  const location = useLocation();
  // We use location.state to grab the data passed from the MoodSelector form!
  
  const { name = 'Music Lover', mood = 'your', genre = 'great' } = location.state || {};
// If no state exists (e.g., they didn't come from the form), we fall back to default values.
  return (
    <div className="results-container">
      <h2>Hey {name}! 🎵</h2>
      <p>Here are some {genre} playlists perfectly curated for your {mood} mood.</p>
      
      <div className="playlists-grid">
        <div className="playlist-card">
          <div className="playlist-cover">💿</div>
          <h3>{mood} {genre} Mix</h3>
          <p>The ultimate vibe.</p>
          <button>Play Now</button>
        </div>
        <div className="playlist-card">
          <div className="playlist-cover">🎧</div>
          <h3>Daily {genre}</h3>
          <p>Fresh picks for you.</p>
          <button>Play Now</button>
        </div>
        <div className="playlist-card">
          <div className="playlist-cover">📻</div>
          <h3>Classic Hits</h3>
          <p>Throwback tunes.</p>
          <button>Play Now</button>
        </div>
      </div>

      <Link to="/mood">
        <button className="back-to-mood-btn">Pick another mood</button>
      </Link>
    </div>
  );
}

export default Results;
