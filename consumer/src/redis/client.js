import { createClient } from 'redis'

export const redisClient = await createClient({
  url: "redis://localhost:6379",
  password: "",
})
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();

export const incrementWord = async (word) => {
  try {
    await redisClient.incr(word);
  } catch (err) {
    console.error("Error incrementing word:", err);
  }
};