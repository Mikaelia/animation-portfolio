import BlogPost from "@components/BlogPost.tsx";
import { useNavigate } from "react-router-dom";
interface Post {
  path: string;
  title: string;
  date: string;
  content: string;
}

const BlogPostPage = ({ post }: { post: Post }) => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="fixed z-10 w-screen bg-white font-semibold text-black">
        <ul className="ml-3 flex items-center gap-5 p-2">
          <li className="nav inline-block bg-white bg-clip-text font-display duration-500 ease-in-out">
            <button className="tracking-wide" onClick={() => navigate(-1)}>
              BACK
            </button>
          </li>
        </ul>
      </nav>
      <div className="relative flex flex-col items-center bg-white">
        <div className="px-4 pb-20 pt-40 md:px-12">
          <BlogPost
            markdown={post.content}
            title={post.title}
            date={post.date}
          />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
