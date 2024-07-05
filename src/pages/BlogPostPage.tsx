import BlogPost from "@components/BlogPost.tsx";

interface Post {
  path: string;
  title: string;
  date: string;
  content: string;
}

const BlogPostPage = ({ post }: { post: Post }) => {
  return (
    <div className="relative flex flex-col items-center bg-white">
      <div className="p-12 pb-20 pt-40">
        <BlogPost markdown={post.content} title={post.title} date={post.date} />
      </div>
    </div>
  );
};

export default BlogPostPage;
