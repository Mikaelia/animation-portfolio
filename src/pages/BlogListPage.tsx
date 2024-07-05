import BlogList from "@components/BlogList.tsx";
import { Link } from "react-router-dom";
import HomeButton from "@rive/HomeButton.tsx";

export const BlogListPage = () => {
  return (
    <>
      <nav className="w-screen border-b border-gray5 bg-gray4 font-semibold">
        <ul className="ml-3 flex items-center gap-5 p-2">
          <li className="nav inline-block bg-white bg-clip-text font-display text-2xl duration-500 ease-in-out">
            <Link to="/">
              <HomeButton />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center bg-white pt-20 text-black">
        <h2 id="journal" className="mb-12 font-display text-5xl font-normal ">
          ALL POSTS
        </h2>
        <BlogList></BlogList>
      </div>
    </>
  );
};
