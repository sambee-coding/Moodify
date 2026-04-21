import { getMusicTracks } from "../services/spotify.service.js";
import { getMoodFeatures } from "../utils/moodEngine.js";

export const generatePlaylist = async (req, res, next) => {
  try {
    const { mood, genre } = req.query;
    
    if (!mood || !genre) {
      throw new Error("Please provide both mood and genre");
    }

    // Note: We use mood string directly for iTunes search to get better results
    const tracks = await getMusicTracks(genre, mood);
    
    res.json({
      success: true,
      data: tracks,
    });
  } catch (err) {
    next(err);
  }
};