import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Plane from "@rive/Plane";
import "../assets/styles/custom.css";
import { Intro } from "@components/Intro";
import { useScroll, animated, useSpring } from "@react-spring/web";
import { AnimatedSocials } from "@components/AnimatedSocials";
import { WorkCard } from "@components/WorkCard";
import { AngleArrowIcon } from "@components/AngleArrowIcon";
import HeaderWave from "@components/HeaderWave";
import { ProjectList } from "@components/ProjectList.tsx";
import { Filters } from "@components/Filters.tsx";
import { LeftWaveSVG } from "@components/LeftWaveSVG.tsx";
import { BackgroundSVG } from "@components/BackgroundSVG.tsx";

export const WelcomeSectionXL = () => {
  const [visibleProjects, setVisibleProjects] = useState("All");
  const plane = useRef<HTMLDivElement>(null);
  const text = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<SVGSVGElement>(null);
  const projBgRef = useRef<SVGSVGElement>(null);
  const frontWaveRef = useRef<SVGSVGElement>(null);
  const blackBgRef = useRef<SVGSVGElement>(null);
  const [socialStyles, socialApi] = useSpring(() => ({
    transform: "translateY(-100vh)",
  }));

  const [textStyles, textApi] = useSpring(() => ({
    opacity: "1",
  }));

  // header 1vh + 229.3px
  const handleScroll = ({
    value: { scrollYProgress },
  }: {
    value: { scrollYProgress: number };
  }) => {
    // if (!text.current || !plane.current) return;

    const viewportHeight = Math.round(window.innerHeight);
    const pageHeight = Math.round(document.documentElement.scrollHeight);
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    plane.current.style.transform = `translateX(100vw)`;
    // text.current.style.transform = `translateX(calc(100vw + 450px))`;

    function calculateVHPercentage() {
      const viewportHeight = window.innerHeight;
      const totalPageHeight = document.documentElement.scrollHeight;
      // console.log(totalPageHeight);
      // subtract header svg
      const vhPercentage = viewportHeight / totalPageHeight;
      return vhPercentage * 100;
    }

    const percent = scrollYProgress * 100;
    const vhPercent = calculateVHPercentage();

    // console.log(
    //   "height should be:",
    //   (5 * vhPercent * document.documentElement.scrollHeight + 229.3) / 100,
    //   document.documentElement.scrollHeight,
    // );

    const handlePlaneTransformation = () => {
      const headerHeight = viewportHeight + 229.3;
      if (scrollPosition >= headerHeight) {
        console.log("ping");
        // subtract the distance already traveled to create new zero.
        //
        const percentOfContainerScrolled =
          (scrollPosition - headerHeight) / (3 * viewportHeight);

        const totalTranslateValueNeeded = 200;
        const translationPerCurrentPercentScrolled =
          percentOfContainerScrolled * totalTranslateValueNeeded;
        // want to get from translate 100 to translate 0, 3vh should be zero
        plane.current.style.transform = `translateX(${100 - translationPerCurrentPercentScrolled}vw)`;
      }
      // start when 100vh scrolled
      // lasts 2vh
      // need percent that 100vh is
    };
    const handleContentTransformation = () => {
      if (percent > 4 * vhPercent && percent < 6 * vhPercent) {
        const sectionPercent = (percent - 4 * vhPercent) / (2 * vhPercent);
        const translationPerCurrentPercentScrolled = sectionPercent * 100;
        text.current.style.transform = `translateX(calc(${100 - translationPerCurrentPercentScrolled}vw + 450px))`;
      } else {
        text.current.style.transform = `translateX(calc(100vw + 450px))`;
      }
      // percent needs to be greater than the height of plane container -
    };

    const handleTextTransformation = () => {
      // frontWaveRef.current.style.display = "block";
      blackBgRef.current.style.display = "none";
      if (scrollYProgress > 0.47) {
        blackBgRef.current.style.display = "block";
      }
      //
      // text.current!.style.transform = `translateX(calc(100vw + 204px))`;
      // if (scrollYProgress > 0.2) {
      //   let svgPercentage = (200 / window.innerWidth) * 100;
      //   const percent = 100 - ((scrollYProgress - 0.2) / 0.18) * 100;
      //   // at zero percent, the thing plus svg is in view
      //   if (Math.round(percent) < -Math.round(svgPercentage)) {
      //     frontWaveRef.current.style.display = "none";
      //     blackBgRef.current.style.display = "block";
      //     // percent is not
      //     text.current!.style.transform = `translateX(0)`;
      //   } else
      //     text.current!.style.transform = `translateX(calc(${percent}vw + 204px))`;
      // }
    };
    //
    // handleContentTransformation();
    handlePlaneTransformation();
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
        {/*<animated.div*/}
        {/*  style={socialStyles}*/}
        {/*  className="fixed right-[-230px] top-0"*/}
        {/*>*/}
        {/*  <AnimatedSocials></AnimatedSocials>*/}
        {/*</animated.div>*/}
        <div className="plane-sizing-section relative flex h-[300vh] w-screen items-center">
          <animated.div
            ref={plane}
            className="plane-section-animated fixed left-0 top-[20%] h-[20rem] w-[42rem]"
          >
            <Plane />
          </animated.div>
        </div>

        <div className="about-section z-1 w-screen">
          <HeaderWave
            className="about-top-wave z-[-1] mb-[-30rem] w-[2000px] "
            background="white"
          />
          <div className="relative h-screen w-full bg-white p-8">
            <div className="about-text-container relative z-10 flex h-full justify-between">
              <Intro></Intro>
              <div className="about-work-section ml-8 flex h-full max-w-[30rem] flex-col justify-start self-start">
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
                  className="resume-button mx-auto mt-auto flex align-middle font-bold text-black"
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

        <div className="projects-container relative z-[-2] mb-[30rem] mt-[-20rem] flex w-screen  flex-col items-center justify-center pt-[30rem]">
          <div className="flex w-full justify-between">
            <div className="text ml-12 flex flex-col items-start justify-center">
              <h2 className="mb-4 font-display text-2xl font-semibold">
                PROJECTS
              </h2>
              <p>A collection of animation and mini-projects.</p>
            </div>
            <Filters
              className="mr-12"
              callback={(val: string) => setVisibleProjects(val)}
            ></Filters>
          </div>
          <div className="container z-10 mt-36">
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
