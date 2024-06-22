import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

const BlogPost = ({
  markdown,
  date,
  title,
}: {
  markdown: string;
  date: string;
  title: string;
}) => {
  return (
    <div className="flex w-screen justify-center bg-white">
      <article className="prose w-full bg-white">
        <h1>{title}</h1>
        <span>{date}</span>
        <Markdown
          components={{
            code: ({ className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter language={match[1]} style={tomorrow}>
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </Markdown>
      </article>
    </div>
  );
};

export default BlogPost;
