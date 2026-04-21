export const getMusicTracks = async (genre, mood) => {
  // iTunes Search API is free and doesn't require a token!
  const query = `${genre} ${mood}`.trim();
  const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=song&limit=12`;

  console.log("Fetching Music from iTunes API:", url);

  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error(`Music API Error: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("No tracks found. Try a different mood or genre!");
  }

  return data.results.map((track) => ({
    name: track.trackName,
    artist: track.artistName,
    url: track.trackViewUrl,
    image: track.artworkUrl100?.replace("100x100bb", "500x500bb"), // Get higher quality image
  }));
};