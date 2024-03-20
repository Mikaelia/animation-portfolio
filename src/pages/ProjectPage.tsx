import { Link } from "react-router-dom";
export const ProjectPage = ({
  children,
  instructions,
  title,
}: {
  children: React.ReactNode;
  instructions: string;
  title: string;
}) => {
  return (
    <>
      <nav className="font-semibold">
        <ul className="flex items-center gap-5 p-4 ">
          <li className="text-gray6 duration-500 ease-in-out hover:text-white">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div
        className="home flex justify-between pb-3 "
        style={{ height: "calc(100vh - 60px)" }}
      >
        <div className="child-container mr-3 h-full w-full overflow-hidden rounded-br-md rounded-tr-md bg-gray4 p-3">
          {children}
        </div>
        <div className="sidePanel w-1/3 rounded-bl-md rounded-tl-md border border-r-0 border-gray5 bg-gray4 p-8 text-xl font-semibold">
          <h1 className="title mb-4">{title}</h1>
          <p className="text-sm font-light">{instructions}</p>
        </div>
      </div>
    </>
  );
};
