import { loadMarkdownFiles } from "@/utils/posts.ts";

let cachedPosts: any[] = [];

export async function fetchPosts() {
  if (cachedPosts.length === 0) {
    cachedPosts = await loadMarkdownFiles();
  }
  return cachedPosts;
}
