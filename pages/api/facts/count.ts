import type { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "redis";

const redis = createClient({ url: process.env.REDIS_URL });

let isConnected = false;

async function connectRedis() {
  if (!isConnected) {
    await redis.connect();
    isConnected = true;
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "GET") return res.status(405).end("Method Not Allowed");

  await connectRedis();

  const index = req.query.index;

  if (typeof index !== "string") {
    return res.status(400).json({ error: "Missing or invalid index" });
  }

  const [up, down, meToo] = await Promise.all([
    redis.get(`fact-${index}-up`),
    redis.get(`fact-${index}-down`),
    redis.get(`fact-${index}-me-too`),
  ]);

  res.status(200).json({
    up: parseInt((up as string) || "0", 10),
    down: parseInt((down as string) || "0", 10),
    "me-too": parseInt((meToo as string) || "0", 10),
  });
}
