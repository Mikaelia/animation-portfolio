import matter from "gray-matter";
import { Buffer } from "buffer";

export const loadMarkdownFiles = async () => {
  const markdownFiles = import.meta.glob("../posts/*.md", {
    query: "?raw",
    import: "default",
  });
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
  console.log(posts);
  return posts;
};
