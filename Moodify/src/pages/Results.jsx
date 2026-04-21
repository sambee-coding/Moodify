import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Results.css';

function Results() {
  const location = useLocation();
  const { name = 'Music Lover', mood = 'Happy 😊', genre = 'Pop' } = location.state || {};

  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`http://localhost:5000/api/playlists?mood=${encodeURIComponent(mood)}&genre=${encodeURIComponent(genre)}`);
        const result = await response.json();

        if (!response.ok) {
          // Now we show the ACTUAL error from the backend (like "Invalid API Key")
          throw new Error(result.message || 'Failed to fetch recommendations');
        }

        setTracks(result.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, [mood, genre]);

  return (
    <div className="results-container">
      <h2>Hey {name}! 🎵</h2>
      <p>Here are some <strong>{genre}</strong> tracks for your <strong>{mood}</strong> mood.</p>
      
      {loading && <div className="loading-state">Finding the perfect vibes... 🎧</div>}
      
      {error && (
        <div className="error-card">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <p className="hint">Tip: Make sure your Spotify keys in .env are correct and the genre is a valid one (like 'pop', 'rock', 'jazz').</p>
        </div>
      )}

      {!loading && !error && (
        <div className="playlists-grid">
          {tracks.map((track, index) => (
            <div key={index} className="playlist-card">
              <div className="playlist-cover">
                {track.image ? (
                  <img src={track.image} alt={track.name} style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover' }} />
                ) : (
                  '🎵'
                )}
              </div>
              <div className="track-info">
                <h3>{track.name}</h3>
                <p>{track.artist}</p>
                <a href={track.url} target="_blank" rel="noopener noreferrer">
                  <button className="play-btn">Play on Spotify</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      <Link to="/mood">
        <button className="back-to-mood-btn">Pick another mood</button>
      </Link>
    </div>
  );
}

export default Results;
