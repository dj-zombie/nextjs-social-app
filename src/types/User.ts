export interface User {
  id: number;
  name: string;
  email: string;
  // Optionally, a list of posts and friends
  posts: Post[];
  friends: User[];
}
