export const getMoodFeatures = (mood) => {
  const moods = {
    "Happy 😊": { valence: 0.9, energy: 0.8, tempo: 120 },
    "Sad 😢": { valence: 0.2, energy: 0.3, tempo: 70 },
    "Chill 😌": { valence: 0.6, energy: 0.4, tempo: 90 },
    "Energetic 🔥": { valence: 0.8, energy: 0.95, tempo: 140 },
  };

  return moods[mood] || moods["Happy 😊"];
};