import Cat from "@rive/Cat";
import HeaderWave from "@components/HeaderWave.tsx";
import { useState } from "react";

export const HeaderSection = ({
  handleScrollTo,
}: {
  handleScrollTo: (arg: string) => void;
}) => {
  const [catLoaded, setCatLoaded] = useState(false);
  return (
    <>
      <div
        className={`z-1 header flex h-screen w-full max-w-[2000px] items-center duration-1000 ${catLoaded ? " bg-white" : "bg-black"}`}
      >
        <div
          className={`rive-projects relative flex w-full flex-col items-center pb-20 pt-20 text-center text-black duration-1000`}
        >
          <h1 className="mt-[-15rem] font-display text-7xl sm:mt-[-10rem] sm:text-8xl lg:text-9xl xl:ml-[12rem]">
            MIKAELA GURNEY
          </h1>
          <p className="mb-20 pt-6 font-body text-xl lg:text-2xl">
            Let's do fun web stuff.
          </p>
          <div className="absolute left-[-1.75rem] flex h-[500px] w-full items-center overflow-hidden sm:bottom-[-18rem] xl:left-[-310px] xl:top-[-240px]">
            <div className="cat mt-24 h-[500px] w-full md:mt-0 md:pr-12 xl:pr-[17rem]">
              <Cat handleWakeUp={() => setCatLoaded(true)}></Cat>
            </div>
          </div>
        </div>
        {catLoaded && (
          <button
            className="scroll-button md:hidden"
            style={{ zIndex: "1" }}
            onClick={() => handleScrollTo("#about")}
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
                fill="black"
                d="M5.636 7.757 7.05 6.343 12.707 12 7.05 17.657l-1.414-1.414L9.878 12 5.636 7.757Z"
              />
              <path
                fill="black"
                d="m12.707 6.343-1.414 1.414L15.535 12l-4.242 4.243 1.414 1.414L18.364 12l-5.657-5.657Z"
              />
            </svg>
          </button>
        )}
      </div>
      <div className="overflow-x-hidden">
        <HeaderWave
          className="relative z-[-1] mt-[-33rem] w-[2000px] rotate-[180deg]"
          background={catLoaded ? "white" : "#0F0F0F"}
        ></HeaderWave>
      </div>
    </>
  );
};
