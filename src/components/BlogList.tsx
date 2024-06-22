import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadMarkdownFiles } from "@/utils/posts";

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await loadMarkdownFiles();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="max-w-[500px] text-black">
      <h2 className="mb-12 font-display text-5xl font-normal ">JOURNAL</h2>
      <ul>
        {posts.map((post) => (
          <li className=" group mb-12" key={post.path}>
            <Link className="font-normal no-underline" to={post.path}>
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
