import React from "react";
import './MoodSelector.css';

function MoodSelector() {
  return (
    <div>
      <h2>How are you feeling today? 🎧</h2>

      <div>
        <button>😊 Happy</button>
        <button>😢 Sad</button>
        <button>😌 Chill</button>
        <button>🔥 Energetic</button>
      </div>
    </div>
  );
}

export default MoodSelector;