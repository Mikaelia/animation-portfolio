import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchPosts } from "@/utils/fetchPosts";
import { Loading } from "@/pages/LoadingPage.tsx";

const PostsContext = createContext<any[]>([]);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts().then((posts) => {
      setPosts(posts);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loading />;

  return (
    <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => useContext(PostsContext);
