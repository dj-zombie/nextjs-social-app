import { NextApiRequest, NextApiResponse } from "next";
import { mockUsers } from "@/data/mockData";

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ users: mockUsers });
}
