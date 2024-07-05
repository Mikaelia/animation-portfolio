import { Link } from "react-router-dom";
import useMediaQuery from "@/utils/useMediaBreakpoint";
import HomeButton from "@rive/HomeButton.tsx";
import BlogPost from "@components/BlogPost.tsx";

const BlogPostPage = ({ post }) => {
  const smQuery = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <div className="relative flex flex-col items-center bg-white">
      <nav className="w-screen border-b border-gray5 bg-gray4 font-semibold">
        <ul className="ml-3 flex items-center gap-5 p-2">
          <li className="nav inline-block bg-white bg-clip-text font-display text-2xl duration-500 ease-in-out">
            <Link to="/">{smQuery ? "Home" : <HomeButton />}</Link>
          </li>
        </ul>
      </nav>
      <div className="p-12 pb-20 pt-40">
        <BlogPost markdown={post.content} title={post.title} date={post.date} />
      </div>
    </div>
  );
};

export default BlogPostPage;
