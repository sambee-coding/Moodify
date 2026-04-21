import dotenv from "dotenv";

dotenv.config();

let token = null;
let expiresAt = 0;

export const getAccessToken = async () => {
  if (token && Date.now() < expiresAt) return token;

  console.log("Fetching new Spotify access token...");

  const authString = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${authString}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error(`Spotify Auth Failed (${res.status}):`, errorText);
    throw new Error(`Auth Error: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  token = data.access_token;
  expiresAt = Date.now() + data.expires_in * 1000;

  console.log("Token fetched successfully!");
  return token;
};