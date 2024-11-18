import { NextApiRequest, NextApiResponse } from "next";
import { mockUsers } from "@/data/mockData";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ users: mockUsers });
}
