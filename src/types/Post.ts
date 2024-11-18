export interface Post {
  id: number;
  title: string;
  content: string;
  timestamp: string; // ISO Date String or Unix Timestamp
  authorId: number; // Reference to User
}

