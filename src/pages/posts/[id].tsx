import { GetServerSideProps } from "next";

interface Post {
  id: number;
  userId: number;
  content: string;
}

interface PostDetailProps {
  post: Post;
}

const PostDetail = ({ post }: PostDetailProps) => {
  return (
    <div className="p-4 bg-white shadow rounded-md">
      <Link href="/">
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Home
        </button>
      </Link>
      <h1 className="text-xl font-bold">Post Detail</h1>
      <p>{post.content}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params!;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
  const posts = await res.json();
  const post = posts.find((p: Post) => p.id === parseInt(id as string));

  return {
    props: { post },
  };
};

export default PostDetail;
