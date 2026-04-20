import React from "react";
import './MoodSelector.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MoodSelector() {
  const navigate = useNavigate();

  const [selectedMood, setSelectedMood] = useState(null);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");

  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    // Instead of alerting, let's navigate to the results page!
    // We can also pass the 'state' across so the Results page knows their name and mood.
    navigate('/results', { state: { name, mood: selectedMood, genre } });
  };
  return (
    <div className="mood-selection">
      <h2>How are you feeling today? 🎧</h2>
      {/* If a mood is selected, show the form. Otherwise, show the buttons. */}
      {selectedMood ? (
        <form className="mood-form" onSubmit={handleSubmit}>
          <h3>Let's find your {selectedMood} music!</h3>
          
          <div className="form-group">
            <label>Selected Mood</label>
            {/* The input is pre-filled with the selected mood and is read-only */}
            <input type="text" value={selectedMood} readOnly />
          </div>
          <div className="form-group">
            <label>Your Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
             />
          </div>
          <div className="form-group">
            <label>Favorite Genre</label>
            <input 
              type="text" 
              placeholder="e.g. Pop, Jazz, Lo-Fi" 
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required 
             />
          </div>
          <button type="submit" className="submit-btn">Get Playlists</button>
          
          {/* A way to go back and pick a different mood */}
          <button type="button" className="back-btn" onClick={() => setSelectedMood(null)}>
            Pick a different mood
          </button>
        </form>
      ) : (
        <div className="emotions-btn">
          {/* We pass the specific mood string into the click handler */}
          <button onClick={() => handleMoodClick('Happy 😊')}>😊 Happy</button>
          <button onClick={() => handleMoodClick('Sad 😢')}>😢 Sad</button>
          <button onClick={() => handleMoodClick('Chill 😌')}>😌 Chill</button>
          <button onClick={() => handleMoodClick('Energetic 🔥')}>🔥 Energetic</button>
        </div>
      )}
    </div>
  );
}
export default MoodSelector;