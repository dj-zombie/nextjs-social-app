import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { mockUsers } from "@/data/mockData";

interface User {
  id: number;
  name: string;
  posts?: { id: number; title: string }[];
}

const UserDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      const userId = parseInt(id as string, 10);
      const foundUser = mockUsers.find((user) => user.id === userId) || null;
      setUser(foundUser);
    }
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <Link href="/users">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Back to Users
        </button>
      </Link>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Posts</h2>
        <ul className="space-y-2">
          {(user.posts ?? []).length > 0 ? (
            user.posts.map((post) => (
              <li key={post.id} className="p-4 bg-white shadow rounded-md">
                {post.title}
              </li>
            ))
          ) : (
            <li>No posts available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserDetailPage;
