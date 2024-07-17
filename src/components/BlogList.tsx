import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { loadMarkdownFiles } from "@/utils/posts.js";

interface Post {
  path: string;
  title: string;
  description: string;
}

interface BlogListProps {
  number?: number;
  newTab?: boolean;
}

const BlogList = ({ number, newTab }: BlogListProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts: Post[] = await loadMarkdownFiles();
      if (number && posts) {
        setPosts(posts.slice(0, number));
      } else {
        setPosts(posts);
      }
    };
    fetchPosts();
  }, [number]);

  return (
    <div className="max-w-[500px] px-4 text-black md:px-0">
      <ul>
        {posts.map((post) => (
          <li className="group mb-12" key={post.path}>
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
