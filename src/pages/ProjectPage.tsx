import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useMediaQuery from "@/utils/useMediaBreakpoint";

export const ProjectPage = ({
  children,
  instructions,
  title,
  instructionControls,
}: {
  children: React.ReactNode;
  instructions: string;
  title: string;
  instructionControls?: React.ReactNode;
}) => {
  const [showSidePanel, setShowSidePanel] = useState(true);
  const [absoluteSidepanel, setAbsoluteSidepanel] = useState(false);
  const smQuery = useMediaQuery("only screen and (max-width: 768px)");

  const toggleSidePanel = () => {
    setShowSidePanel(!showSidePanel);
  };

  useEffect(() => {
    setShowSidePanel(!smQuery);
    setAbsoluteSidepanel(smQuery);
  }, [smQuery]);

  return (
    <div className="relative overflow-x-hidden">
      <nav className=" mb-3  border-b border-gray5 bg-gray4 font-semibold ">
        <ul className="ml-1 flex items-center gap-5 p-1">
          <li className="nav inline-block bg-white bg-clip-text font-handwriting text-2xl duration-500 ease-in-out">
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <div
        className="home flex justify-between pb-3 "
        style={{ height: "calc(100vh - 55px)" }}
      >
        <div className="child-container  h-full w-full overflow-hidden rounded-br-md rounded-tr-md border border-l-0 border-gray5 bg-gray4 p-3">
          {children}
        </div>
        <div
          className={`${!showSidePanel ? "minimized" : ""} ${absoluteSidepanel ? "absolute left-0 ml-0 w-full" : "relative ml-3"} ${absoluteSidepanel && !showSidePanel && "hidden"} side-panel w-1/3 rounded-bl-md rounded-tl-md border border-r-0 border-gray5 bg-gray4 p-8 text-xl font-semibold`}
        >
          <h1 className="title mb-6">{title}</h1>
          <p className="text-sm font-light">{instructions}</p>
          <button className="hide-button" onClick={toggleSidePanel}>
            <svg
              className="open-svg h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.878 12 5.636 7.757Z"
              />
              <path
                fill="white"
                d="m12.707 6.343-1.414 1.414L15.535 12l-4.242 4.243 1.414 1.414L18.364 12l-5.657-5.657Z"
              />
            </svg>
          </button>
          {instructionControls}
        </div>
        <button
          className={`${!showSidePanel ? "minimized" : ""} show-button`}
          onClick={toggleSidePanel}
        >
          <svg
            className="open-svg h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            width="800"
            height="800"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.878 12 5.636 7.757Z"
            />
            <path
              fill="white"
              d="m12.707 6.343-1.414 1.414L15.535 12l-4.242 4.243 1.414 1.414L18.364 12l-5.657-5.657Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
