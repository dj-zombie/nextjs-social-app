import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  content: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('/api/posts');
        const data = await res.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Link href="/">
        <span className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Home</span>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white shadow rounded-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
