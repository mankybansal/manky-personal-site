// /pages/api/facts/vote.ts

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
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

  await connectRedis();

  const { factIndex, type } = req.body;

  if (
    typeof factIndex !== "number" ||
    !["up", "down", "me-too"].includes(type)
  ) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const key = `fact-${factIndex}-${type}`;
  await redis.incr(key);

  return res.status(200).json({ success: true });
}
