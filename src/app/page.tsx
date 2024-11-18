import Link from "next/link";

const HomePage = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to the User and Posts App
      </h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/users">
              <span className="text-blue-500 hover:underline">Users</span>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <span className="text-blue-500 hover:underline">Posts</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
