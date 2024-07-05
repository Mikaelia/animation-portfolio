import matter from "gray-matter";
import { Buffer } from "buffer";

interface Post {
  path: string;
  date: string;
  title: string;
  description: string;
  content: string;
}

export const loadMarkdownFiles = async (): Promise<Post[]> => {
  const markdownFiles = import.meta.glob("../posts/*.md", {
    as: "raw",
  }) as Record<string, () => Promise<string>>;

  const posts = await Promise.all(
    Object.keys(markdownFiles).map(async (filePath) => {
      const content = await markdownFiles[filePath]();
      const { data, content: markdownContent } = matter(Buffer.from(content));
      const path = filePath.replace("../posts/", "").replace(".md", "");
      return {
        path: `/${path}`,
        date: data.date,
        title: data.title || path.replace(/-/g, " "),
        description: data.description || "",
        content: markdownContent,
      };
    }),
  );
  return posts;
};
