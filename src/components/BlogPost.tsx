import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { useEffect } from "react";

const BlogPost = ({
  markdown,
  date,
  title,
}: {
  markdown: string;
  date: string;
  title: string;
}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: "long", day: "numeric", year: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  useEffect(() => {
    if (markdown && date && title) {
      window.scrollTo(0, 0);
    }
  }, [markdown, date, title]);

  return (
    <article className="prose w-full bg-white">
      <div className="title-container mb-12 flex flex-col items-center">
        <h1 className=" text-center font-display text-5xl font-normal">
          {title.toUpperCase()}
        </h1>
        <span className="text-sm">{formatDate(date)}</span>
      </div>
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
  );
};

export default BlogPost;
