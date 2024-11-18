import { NextApiRequest, NextApiResponse } from "next";
import { mockPosts } from "@/data/mockData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ posts: mockPosts });
}
