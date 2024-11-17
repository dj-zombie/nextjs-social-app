export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}

export const mockUsers = [
  { id: 1, name: "John Doe", posts: [{ id: 1, title: "John's first post" }] },
  { id: 2, name: "Jane Smith", posts: [{ id: 2, title: "Jane's post" }] },
  { id: 3, name: "Alice Johnson", posts: [] },
];

export const mockPosts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the first post",
    authorId: 1,
  },
  {
    id: 2,
    title: "Another Post",
    content: "This is another post by John",
    authorId: 1,
  },
  {
    id: 3,
    title: "Jane's Thoughts",
    content: "Thoughts from Jane",
    authorId: 2,
  },
  {
    id: 4,
    title: "Alice's Update",
    content: "An update from Alice",
    authorId: 3,
  },
];
