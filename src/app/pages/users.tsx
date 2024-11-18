import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Track loading state
  const [error, setError] = useState<string | null>(null); // Track errors

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/users");
        if (!res.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await res.json();
        setUsers(data.users); // Assuming the API returns an object with a 'users' array
      } catch (err) {
        setError("Error fetching users");
      } finally {
        setLoading(false); // Stop loading when the fetch is done
      }
    };

    fetchUsers();
  }, []); // Empty dependency array means this runs once on mount

  // The return statement for rendering
  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Users List</h1>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-4 bg-gray-100 shadow rounded-md">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersPage;
