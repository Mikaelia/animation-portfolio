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

  const handleScroll = ({
    value: { scrollYProgress },
  }: {
    value: { scrollYProgress: number };
  }) => {
    if (!text.current || !plane.current) return;
    const handlePlaneTransformation = () => {
      if (scrollYProgress < 0.05) {
        plane.current.style.transform = "translateX(100vw)";
      } else {
        const percent = 100 - ((scrollYProgress - 0.05) / 0.2) * 100;
        plane.current.style.transform = `translateX(${percent}vw)`;
      }
    };

    const handleTextTransformation = () => {
      frontWaveRef.current.style.display = "block";
      blackBgRef.current.style.display = "none";

      text.current!.style.transform = `translateX(calc(100vw + 204px))`;
      if (scrollYProgress > 0.2) {
        // .2 because want to start after .2, .18 determines speed
        let svgPercentage = (200 / window.innerWidth) * 100;
        const percent = 100 - ((scrollYProgress - 0.2) / 0.18) * 100;
        // at zero percent, the thing plus svg is in view
        if (Math.round(percent) < -Math.round(svgPercentage)) {
          frontWaveRef.current.style.display = "none";
          blackBgRef.current.style.display = "block";
          // percent is not
          text.current!.style.transform = `translateX(0) translateY(${percent + svgPercentage}vh)`;
        } else
          text.current!.style.transform = `translateX(calc(${percent}vw + 204px))`;
      }
    };
    //
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
      <div className="plane-section xl:justify-space-between  relative z-0 flex h-[700vh] w-full flex-col items-center justify-center pl-20 pr-20 lg:mt-16 xl:mt-20 xl:flex-row">
        {/*<animated.div*/}
        {/*  style={socialStyles}*/}
        {/*  className="fixed right-[-230px] top-0"*/}
        {/*>*/}
        {/*  <AnimatedSocials></AnimatedSocials>*/}
        {/*</animated.div>*/}
        <animated.div
          ref={plane}
          className="plane xl:w-9rem sm:display-block display-none fixed top-20 mt-[10rem] h-[20rem] w-[100vw] max-w-3xl md:h-[20rem] md:w-[45vw] lg:mt-0 xl:mt-[5rem]"
        >
          <Plane />
        </animated.div>

        {/*// can we just make this full sized and hide them until we scroll to them*/}
        <animated.div
          ref={text}
          style={textStyles}
          className="animated-content-section z-1 xl:items-left fixed left-0 top-0 flex h-screen w-screen items-center text-center xl:text-left"
        >
          {/*// need a relative, not fixed container*/}
          <div className="main-container relative h-full w-full">
            <div className="about-container absolute left-0 top-0 h-full w-full ">
              <LeftWaveSVG
                className="about-front-wave absolute left-[-200px] top-0"
                ref={frontWaveRef}
              />
              <div
                className="about-content-container absolute top-0 h-screen max-h-[1067px] w-[100vw] bg-white"
                ref={contentRef}
              >
                <div className="about-text-container relative z-10 flex h-full">
                  <Intro></Intro>
                  <div className="about-work-section m-12 mt-3 flex flex-col justify-start ">
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
                      skills={[
                        "Typescript",
                        "React",
                        "HTML & CSS",
                        "Storybook",
                      ]}
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
                      className="mx-auto mt-auto flex align-middle font-bold text-black"
                    >
                      <span className="text-l text-nowrap font-display font-bold">
                        Full Resume
                      </span>
                      <AngleArrowIcon className={"h-6 pb-[3px]"} />
                    </Link>
                  </div>
                </div>
                <BackgroundSVG
                  className="about-work-background clip-image min-w-[2000px] max-w-[2000px]"
                  ref={bgRef}
                />
                <HeaderWave
                  className="about-bottom-wave relative z-[-1] mt-[-23rem]  w-[2000px] rotate-[180deg]"
                  background="white"
                />
                {/*****PROJECTS*****/}
                <div className="projects-container relative z-[-2] mb-[30rem] mt-[-20rem] flex w-screen  flex-col items-center justify-center pt-[30rem]">
                  <div className="flex w-full justify-between">
                    <div className="text ml-12 flex flex-col items-start justify-center">
                      <h2 className="mb-4 font-display text-2xl font-semibold">
                        PROJECTS
                      </h2>
                      <p>A collection of animation and mini-projects.</p>
                    </div>
                    <Filters className="mr-12"></Filters>
                  </div>
                  <div className="container z-10 mt-36">
                    {/*<ProjectList projBgRef={projBgRef}></ProjectList>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="testing z-20 bg-blue">This is a test</div>
        </animated.div>
        {/*had to do this for z-index and the clip path*/}
        <div
          ref={blackBgRef}
          className="fixed left-0 top-0 z-[-2] h-full w-screen bg-black"
        ></div>
        {/*<div className="absolute bottom-0 left-0 z-[-1] h-full w-screen bg-white"></div>*/}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="100%"
          width="110%"
          viewBox="0 0 1600 800"
          preserveAspectRatio="none"
          ref={projBgRef}
          className="clip-image project-svg fixed left-0 top-0  z-[-1] min-w-[2000px] max-w-[2000px]"
        >
          <rect
            style={{ zIndex: "-2" }}
            fill="#190059"
            width="1600"
            height="800"
          />
          <g>
            <path
              fill="#4d1553"
              d="M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z"
            />
            <path
              fill="#712e4b"
              d="M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z"
            />
            <path
              fill="#934842"
              d="M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"
            />
            <path
              fill="#b36234"
              d="M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z"
            />
            <path
              fill="#d47e1c"
              d="M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"
            />
            <path
              fill="#de962c"
              d="M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z"
            />
            <path
              fill="#e8af3c"
              d="M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"
            />
            <path
              fill="#f0c74b"
              d="M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z"
            />
            <path
              fill="#f8df5b"
              d="M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"
            />
            <path
              fill="#fff86b"
              d="M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z"
            />
          </g>
        </svg>
      </div>
    </>
  );
};
