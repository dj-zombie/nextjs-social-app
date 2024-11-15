import { useEffect, useState } from "react";
import Link from "next/link";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
        const data = await res.json();
        setUsers(data.users);  // Update this line based on your API response
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch users");
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Home
        </button>
      </Link>
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-white shadow rounded-md">
            <Link href={`/users/${user.id}`}>
              <span className="text-blue-600 hover:underline">{user.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;

