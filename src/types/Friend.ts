export interface Friend {
  userId: number;
  friendId: number;
  createdAt: string; // When the friendship was established
  status: "pending" | "accepted" | "rejected"; // Status of the friendship
}
