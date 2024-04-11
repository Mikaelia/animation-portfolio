import Cat from "@rive/Cat";
import { Link } from "react-scroll";
import HeaderWave from "@components/HeaderWave.tsx";
import { useState } from "react";

export const HeaderSection = () => {
  const [catLoaded, setCatLoaded] = useState(false);
  return (
    <>
      <div
        className={` z-1 header flex h-screen w-full max-w-[2000px] items-center duration-1000 ${catLoaded ? " bg-gray3" : "bg-black"}`}
      >
        <div
          className={`rive-projects relative flex w-full flex-col items-center pb-20 pt-20 text-center duration-1000 ${catLoaded ? "text-white" : "text-black"}`}
        >
          <h1 className="mt-[-15rem] font-handwriting text-7xl sm:mt-[-10rem] sm:text-8xl lg:text-9xl">
            MIKAELA GURNEY
          </h1>
          <p className="mb-20 pt-6 font-handwriting md:text-xl lg:text-2xl">
            Let's do fun web stuff.
          </p>
          <div className="absolute left-[-1.75rem] flex h-[500px] w-full items-center overflow-hidden sm:bottom-[-18rem] xl:left-[-18rem] xl:top-[-16rem]">
            <div className="cat h-[500px] w-full xl:pr-[17rem] ">
              <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
            </div>
          </div>
        </div>
        {catLoaded && (
          <Link
            className="scroll-button md:hidden"
            style={{ zIndex: "1" }}
            to="section1"
            smooth="easeInOutCubic"
            duration={1500}
          >
            <svg
              className="scroll-svg h-8 w-8"
              xmlns="http://www.w3.org/2000/svg"
              width="800"
              height="800"
              fill="none"
              viewBox="0 0 24 24"
              style={{ transform: "rotate(90deg)" }}
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
          </Link>
        )}
      </div>
      <div className="overflow-x-hidden">
        <HeaderWave background={catLoaded ? "#333333" : "#0F0F0F"}></HeaderWave>
      </div>
    </>
  );
};
