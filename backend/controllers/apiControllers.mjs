import { db } from "../utils/tempDatabase.js";

export const createShortUrlController = async (req, res) => {
  // Example usage
  const { url } = req.body;
  const shortUrl = generateShortUrl(url);
  console.log(`Short URL: ${shortUrl}`);
  res.json({ message: 'success'})
}

export const getAllShortUrlController = async (req, res) => {
  res.json(db)
}