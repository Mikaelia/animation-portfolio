import HeaderWave from "@components/HeaderWave.tsx";
import BlogList from "@components/BlogList.tsx";
import { Link } from "react-router-dom";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";
import SleepCat from "@rive/SleepCat.tsx";

export const JournalSection = () => {
  return (
    <>
      <div className="blog-section relative z-[1000] flex w-screen max-w-[2000px] flex-col items-center bg-white px-4  md:px-12 ">
        )
        <HeaderWave
          className="about-top-wave z-[-1] mb-[-20rem] mt-[-20rem] w-[2000px]"
          background="white"
        />
        <div className="blog relative mx-auto flex flex-col items-center self-start md:mx-0 md:items-start">
          <h2
            id="journal"
            className="mb-12 mt-[-10rem] font-display text-5xl font-normal text-black md:mt-0 "
          >
            JOURNAL
          </h2>
          <BlogList number={3} />
          <Link
            to="/blog-list"
            target=""
            className="resume-button mt-12 flex align-middle font-bold text-black md:self-start"
          >
            <span className="text-nowrap font-display text-sm font-bold ">
              VIEW MORE
            </span>
            <AngleArrowIcon className={"arrow-icon ml-1 mt-[2px] h-4"} />
          </Link>
        </div>
        <div className="absolute bottom-[-24.65rem] left-[55%] inline-block h-[20rem] w-[30rem] translate-x-[-55%]">
          <SleepCat></SleepCat>
        </div>
      </div>
      <HeaderWave
        className="about-bottom-wave relative z-[-1] mt-[-30rem]  w-[2000px] rotate-[180deg]"
        background="white"
      />
    </>
  );
};
