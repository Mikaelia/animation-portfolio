import { loadMarkdownFiles } from "@/utils/posts";

let cachedPosts: any[] = [];

export async function fetchPosts() {
  if (cachedPosts.length === 0) {
    cachedPosts = await loadMarkdownFiles();
  }
  return cachedPosts;
}
