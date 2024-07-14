import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Plane from "@rive/Plane";
import "../assets/styles/custom.css";
import { Intro } from "@components/Intro";
import { useScroll, animated } from "@react-spring/web";
import { WorkCard } from "@components/WorkCard";
import { AngleArrowIcon } from "@components/AngleArrowIcon";
import HeaderWave from "@components/HeaderWave";
import { ProjectList } from "@components/ProjectList.tsx";
import { Filters } from "@components/Filters.tsx";
import { BackgroundSVG } from "@components/BackgroundSVG.tsx";
import { AnimatedPlane } from "@components/AnimatedPlane.tsx";

export const WelcomeSectionXL = ({
  linksRef,
}: {
  linksRef: React.RefObject<HTMLDivElement>;
}) => {
  const [visibleProjects, setVisibleProjects] = useState("All");
  const bgRef = useRef<SVGSVGElement>(null);
  const projBgRef = useRef<SVGSVGElement>(null);
  const blackBgRef = useRef<HTMLDivElement>(null);

  const handleScroll = ({
    value: { scrollYProgress },
  }: {
    value: { scrollYProgress: number };
  }) => {
    function calculateVHPercentage() {
      const viewportHeight = window.innerHeight;
      const totalPageHeight = document.documentElement.scrollHeight;
      // subtract header svg
      const vhPercentage = viewportHeight / totalPageHeight;
      return vhPercentage * 100;
    }

    const percent = scrollYProgress * 100;
    const vhPercent = calculateVHPercentage();

    const handleTextTransformation = () => {
      if (!blackBgRef.current) return;
      if (!linksRef.current) return;

      blackBgRef.current.style.display = "none";
      linksRef.current.style.transform = "translateX(100%)";

      if (percent > 4 * vhPercent) {
        linksRef.current.style.transform = "translateX(0)";
      }

      if (percent > 4.5 * vhPercent) {
        blackBgRef.current.style.display = "block";
      }
    };

    handleTextTransformation();
  };

  useScroll({
    onChange: handleScroll,
    default: {
      immediate: true,
    },
  });

  return (
    <>
      <div className="plane-section xl:justify-space-between relative z-0 flex w-full flex-col items-center justify-center pl-20 pr-20">
        <div className="plane-sizing-section relative flex h-[250vh] w-screen items-center"></div>
        <AnimatedPlane />
        <div className="about-section z-1 flex w-screen flex-col items-center ">
          <HeaderWave
            className="about-top-wave z-[-1] mb-[-30rem] w-[2000px] "
            background="white"
          />
          <div
            id="about"
            className="relative w-full max-w-[2000px] bg-white p-8 lg:h-screen"
          >
            <div className="about-text-container relative z-10 flex h-full justify-between px-12 sm:flex-col sm:items-center lg:flex-row">
              <Intro></Intro>
              <div className="about-work-section flex h-full max-w-[30rem] flex-col lg:ml-8 lg:justify-start lg:self-start">
                <WorkCard
                  backgroundRef={bgRef}
                  url="https://www.salesforce.com"
                  date="JAN 2021 - JAN 2024"
                  title="Software Engineer • Salesforce"
                  details="Built data-connected, flexible, and accessible components for Trailhead, marketing, and core platform UI libraries."
                  skills={[
                    "Javascript",
                    "Typescript",
                    "React",
                    "Web Components",
                    "HTML & CSS",
                    "Storybook",
                  ]}
                ></WorkCard>
                <WorkCard
                  backgroundRef={bgRef}
                  url="https://garden.zendesk.com/"
                  date="DEC 2020 - JAN 2021"
                  title="Senior Technical Writer • Zendesk"
                  details="Made key documentation contributions across Zendesk’s Garden design system component set."
                  skills={["Typescript", "React", "HTML & CSS", "Storybook"]}
                ></WorkCard>
                <WorkCard
                  backgroundRef={bgRef}
                  date="MAR 2019 - APR 2020"
                  title="Software Engineer • Zume Inc."
                  details="Built Zume’s first component library (ZCL) from the ground up using Vue.js and Typescript, resulting in a
        collection of 30+ components."
                  skills={[
                    "Javascript",
                    "Typescript",
                    "Vue",
                    "HTML & CSS",
                    "Storybook",
                  ]}
                ></WorkCard>
                <Link
                  to="/resume"
                  target="_blank"
                  className="resume-button mx-auto mt-12 flex align-middle font-bold text-black lg:mt-auto"
                >
                  <span className="text-l text-nowrap font-display font-bold">
                    Full Resume
                  </span>
                  <AngleArrowIcon className={"arrow-icon h-6"} />
                </Link>
              </div>
            </div>
            <BackgroundSVG
              className="about-work-background clip-image min-w-[2000px] max-w-[2000px]"
              ref={bgRef}
            />
          </div>
          <HeaderWave
            className="about-bottom-wave relative z-[-1] mt-[-23rem]  w-[2000px] rotate-[180deg]"
            background="white"
          />
        </div>

        <div className="projects-container relative z-[-2] mt-[-20rem] flex w-screen flex-col  items-center justify-center pb-[30rem] pt-[30rem]">
          <div className="flex w-full max-w-[2000px] justify-between">
            <div className="text ml-12 flex flex-col items-start justify-center">
              <h2
                id="projects"
                className="mb-4 font-display text-5xl font-normal"
              >
                PROJECTS
              </h2>
              <p>A collection of animation and mini-projects.</p>
            </div>
            <Filters
              className="mr-12"
              callback={(val: string) => setVisibleProjects(val)}
            ></Filters>
          </div>
          <div className="container z-10 mt-36 flex flex-col items-center">
            <ProjectList
              visibleProjects={visibleProjects}
              projBgRef={projBgRef}
            ></ProjectList>
          </div>
        </div>
      </div>
      <div
        ref={blackBgRef}
        className="fixed left-0 top-0 z-[-1] h-full w-screen bg-black"
      ></div>
      <BackgroundSVG
        className="clip-image project-svg fixed left-0 top-0  z-[-1] min-w-[2000px] max-w-[2000px]"
        ref={projBgRef}
      />
    </>
  );
};
