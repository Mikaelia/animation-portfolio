import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadMarkdownFiles } from "@/utils/posts";

const BlogList = ({
  number,
  newTab,
}: {
  number?: number;
  newTab?: boolean;
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadMarkdownFiles();
      if (number) {
        setPosts(posts.slice(0, number));
      } else setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-[500px] text-black">
      <ul>
        {posts.map((post) => (
          <li className=" group mb-12" key={post.path}>
            <Link
              target={newTab ? "_blank" : ""}
              className="font-normal no-underline"
              to={post.path}
            >
              <h3 className="text-l mb-2 font-bold transition duration-300 group-hover:text-pink">
                {post.title}
              </h3>
              <p className="no-underline">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
