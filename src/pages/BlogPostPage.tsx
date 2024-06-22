import { Link } from "react-router-dom";
import useMediaQuery from "@/utils/useMediaBreakpoint";
import HomeButton from "@rive/HomeButton.tsx";
import BlogPost from "@components/BlogPost.tsx";

export const BlogPostPage = ({ post }) => {
  const smQuery = useMediaQuery("only screen and (max-width: 768px)");

  return (
    <div className="project-page relative overflow-x-hidden">
      <nav className="border-b border-gray5 bg-gray4 font-semibold ">
        <ul className="ml-3 flex items-center gap-5 p-2">
          <li className="nav inline-block bg-white bg-clip-text font-display text-2xl duration-500 ease-in-out">
            <Link to="/">{smQuery ? "Home" : <HomeButton></HomeButton>}</Link>
          </li>
        </ul>
      </nav>
      <BlogPost markdown={post.content} title={post.title} date={post.date} />
    </div>
  );
};
