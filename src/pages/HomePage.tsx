import { useEffect, useRef } from "react";
import { HeaderSection } from "@components/HeaderSection.tsx";
import { WelcomeSectionXL } from "@/components/WelcomeSectionXL.tsx";
import { WelcomeSection } from "@/components/WelcomeSection.tsx";
import Background from "@/components/Background";
import { ProjectList } from "@components/ProjectList.tsx";
import RiveFooter from "@rive/FooterWave.tsx";
import "../assets/styles/custom.css";
import useMediaQuery from "@/utils/useMediaBreakpoint.ts";
import BlogList from "@components/BlogList";
import { useLenis } from "@/hooks/useLenis.tsx";
import HeaderWave from "@components/HeaderWave.tsx";
import { Link } from "react-router-dom";
import { AngleArrowIcon } from "@components/AngleArrowIcon.tsx";

export const HomePage = () => {
  const linksRef = useRef(null);

  const xlQuery = useMediaQuery(
    "only screen and (min-width: 1280px) and (max-width: 2000px)",
  );

  const handleScrollTo = useLenis();

  return (
    <div className="homepage relative flex flex-col items-center overflow-x-hidden">
      <div
        ref={linksRef}
        className="anchor-links fixed right-0 top-0 z-[1000] flex translate-x-full gap-4 rounded-bl border-b border-l border-black bg-white p-1 font-display font-semibold text-black duration-300 ease-in-out hover:text-pink"
      >
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#about")}
        >
          ABOUT
        </a>
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#projects")}
        >
          PROJECTS
        </a>
        <a
          className="no-underline hover:text-black"
          onClick={() => handleScrollTo("#journal")}
        >
          JOURNAL
        </a>
      </div>
      <HeaderSection />
      <WelcomeSectionXL linksRef={linksRef} />
      <div className="blog-section flex w-screen max-w-[2000px] flex-col items-center bg-white px-12 ">
        <HeaderWave
          id="wave"
          className="about-top-wave z-[-1] mb-[-20rem] mt-[-20rem] w-[2000px]"
          background="white"
        />
        <div className="blog flex flex-col self-start">
          <h2
            id="journal"
            className="mb-12 font-display text-5xl font-normal text-black "
          >
            JOURNAL
          </h2>
          <BlogList number={3} newTab />
          <Link
            to="/blog-list"
            className="resume-button mt-12 flex self-start align-middle font-bold text-black"
          >
            <span className="text-l mr-auto text-nowrap font-display font-bold text-black">
              View More
            </span>
            <AngleArrowIcon className={"arrow-icon h-6"} />
          </Link>
        </div>
      </div>

      {/*{xlQuery ? (
        <WelcomeSectionXL />
      ) : (
        <WelcomeSection />
      )}*/}
      <Background />
      <div className="z-[100] overflow-x-hidden bg-white">
        <RiveFooter />
      </div>
    </div>
  );
};
